var example3 = function(p) {
    var dataContainer;
    var margin = 30;
    p.setup = function() {
      
      width = 700;
      height = 200;

      p.createCanvas(width, height);
      p.translate(margin,margin);
      //Using custom DOM elements to store and access animated variables
      dataContainer = d3.select('body').append('custom');
      
      
      p.textAlign(p.CENTER);
      
      //Periodic function that produces a series of D3 transitions.
      refresh();
      setInterval(refresh, 3000);
      
    }


    //Refresh function contains only D3
    function refresh() {
      var values;
      var rand = Math.random() * 30 + 10;
      var slope = Math.random() * 6 - 3;
      values = d3.range(20).map(function(i) { 
        var val = i*slope + rand + Math.random() * 3;
        return (val > 50) ? 50 : val;
      }) 
      
      x = d3.scale.linear()
        .domain([0, values.length])
        .range([0, width-margin]);
      
      y = d3.scale.linear()
        .domain([0, 50])
        .range([height-margin, 0]);
     
      //bind generated data to custom dom elements
      var bars = dataContainer.selectAll('.bars').data(values);
      
      //store variables for visual representation. These will be used
      //later by p5 methods.
      bars
        .enter()
        .append('rect')
        .attr('height', 120)
        .attr('class', 'bars')
        .attr('x', function(d, i) { return x(i) })
        .attr('dx', function(d) { return (width-margin*2)/values.length - 1;})
        .attr('y', function(d) { return height; })
      
      bars
        .transition()
        .duration(2000)
        .delay(function(d,i) { return i * 50;})
        .attr('height', function(d) { return height - y(d); })
        .attr('x', function(d, i) { return x(i) })
        .attr('y', function(d) { return  y(d); })
     
    }

    //Draw function contains no D3.
    p.draw = function() {
      p.background(255);
      p.noStroke();
      
      //p5.dom
      var bars = p.getElements('bars');

      for(var i = 0; i < bars.length; i++) {
        var thisbar = bars[i];
        p.push();
        p.translate(thisbar.attribute('x'), thisbar.attribute('y'));
        
        if((p.mouseX > thisbar.attribute('x')) && (p.mouseX < (p.int(thisbar.attribute('x')) + p.int(thisbar.attribute('dx'))))) {
          p.fill('brown');
        } else {
          p.fill('red');
        }
        p.rect(0,0, thisbar.attribute('dx'), thisbar.attribute('height'));
        p.fill('white')
        p.text(p.int(thisbar.attribute('height')),thisbar.attribute('dx')/2, 15);
        p.pop();
      }
      p.stroke('black');
      p.strokeWeight(3);
      p.line(0,height-margin,width,height-margin);
      p.noStroke();
    }
  }
