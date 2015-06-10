// Library

p5.prototype.D3Connect = function() {

  //array of two-way channels for communication
  var arrayOfListeners = arguments;

  //Create the d3 dispatch object using the arguments passed from the p5 sketch.
  window.p5connect = d3.dispatch.apply(this, arrayOfListeners);

  //Initialize an object that will store passed data and store whether an event
  //was fired during that draw cycle.
  var storedSharedData = {},
      eventFired = {},
      i = -1,
      n = arrayOfListeners.length;

  while (++i < n) {
    storedSharedData[arrayOfListeners[i]] = null;
    eventFired[arrayOfListeners[i]] = false;
    d3Event(arrayOfListeners[i]);
  }

  function d3Event(name) {
    p5connect.on(name, function(data) {
      storedSharedData[name] = data;
      eventFired[name] = true;
      //emitEvent(name, data);
    });
  }


  //At the end of the draw loop, set all the events fired values back to false
  p5.prototype.registerMethod('post', resetEvents);
  function resetEvents() {
    var i = -1, n = arrayOfListeners.length;
    while (++i < n) eventFired[arrayOfListeners[i]] = false;
  };


  //Methods to expose
  this.getValue = function(name) {
    if(name in storedSharedData) {
      return storedSharedData[name];
    } else {
      return null;
    }
  };

  this.setValue = function(name, val) {
    if(name in storedSharedData) {
      storedSharedData[name] = val;
      p5connect[name](val);
      return true;
    } else {
      return false;
    }
  };

  this.wasFired = function(name) {
    if(name in eventFired) {
      return eventFired[name]
    } else {
      return false;
    }
  };

  //Not sure how to make this into a function similar to .mousemove().
  //For now, events are stored and checked using .wasFired() and cleared after
  //each draw.
  // function emitEvent(name, data) {
  //   p5.prototype.D3EventName = name;
  //   p5.prototype.D3EventData = data;
  //   var d3EventFired = p5.d3EventFired;
  //   if (typeof d3EventFired === 'function') {
  //     var executeDefault = d3EventFired(e);
  //     if(executeDefault === false) {
  //       e.preventDefault();
  //     }
  //   }
  // }



  return this;
};
