function setup() {
      
      //Create the p5 canvas
      var width = 500,
          height = 200,
          margin = 100;
      
      var c = createCanvas(width + margin*2, height + margin*2);
      c.parent('recipe-example');
      stroke("#fff");
      
      //Set the output range of the different scales.
      var radius = 10,
          maxRadius = 200
          startColor = "#033E8C",
          midColor = "#00D96F";
          endColor = "#F2B705";
      
      
      /*
      Create the three different scales used in this example. Each scale returns a function. So the variable d3xScale can be used as if it were a function such as d3xScale(.5)
      */
      var d3xScale = d3.scale.linear()
        .domain([0,1])
        .range([margin,margin+width]);
      
      var d3colorScale = d3.scale.linear()
        .domain([0,.5,1])
        .range([startColor,midColor,endColor]);
      
      var d3radiusScale = d3.scale.linear()
        .domain([0,1])
        .range([radius,maxRadius]);

      /*
      Create a for loop and draw an ellipse using p5's drawing syntax.
      */
      for(var i = 0; i < 1; i += .05) {
        var scaledX = d3xScale(i);
        var scaledColor = d3colorScale(i);
        var scaledRadius = d3radiusScale(i);
        fill(scaledColor);
        ellipse(scaledX, maxRadius, scaledRadius, scaledRadius);
      }
      
        
    }
