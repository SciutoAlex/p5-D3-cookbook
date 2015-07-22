// this sketch is modified from:
//  https://github.com/SciutoAlex/p5-D3-cookbook/tree/gh-pages/recipes-intermediate/individual-transitions 
//  to use/show rendering of shapes from data array

var custom,
    // use d3 to create an array [0,1,2,3,4 ... 499];
    data = d3.range(24), 
    randomColour;

function setup() {
  // create a d3 connection to the DOM (that is ignored by the browser)
  custom = d3.select('body').append('custom');
  
  //Create the p5 canvas
  var width = 700,
      height = 200,
      transitionDuration = 800;
  
  var c = createCanvas(width, height);
  c.parent('recipe-example');
  stroke("#fff");
  
  // use d3 enter() to append the circles to the custom object
  var circle = custom.selectAll('circle')
    .data(data)
    .enter()
    .append('customCircle')
        .classed('circle', true)
        .attr({ // d3 to set p5 attributes
            // use anonymous functions to return fresh values
            radius: function() { return random(5, 48); }, 
            xPos: function() { return random(width); },
            yPos: function() { return random(height); },
            // apply unique ID using the `index` of the array
            id: function(d,i) { return 'c-' + i; } 
        });
  
  // console.log(custom.node()); 
  // You can access and view the custom's DOM node using D3's .node() method. 
  // Mostly used for debugging and educational purposes
  
  // every 500ms, run a function to randomise the selected attributes
  setInterval(function() {
      circle
          .transition()
          .duration(transitionDuration)
          .attr({
              radius: function() { return random(10, 36); }, 
              xPos: function() { return random(width); },
              yPos: function() { return random(height); },
          });
  }, transitionDuration);

}

function draw() {
    // blendMode(BLEND);
    background(255);
    noStroke();
    colorMode(RGB);
    blendMode(MULTIPLY);
    
    // using D3, we select the circle customObject. 
    // using .attr('attribute-name') to access the values of the circle 

    // use loop to go apply the circles to p5 canvas
    for (var i = 0; i < data.length; i++) {

      // use D3 select each circle via it's #ID
      var thisObject = custom.select('#c-' +i);
      fill('#ED225D');
      ellipse(thisObject.attr('xPos'), 
              thisObject.attr('yPos'),
              thisObject.attr('radius'),
              thisObject.attr('radius'));
    }
}