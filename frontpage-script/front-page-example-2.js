var example2 = function(p) {

  p.setup = function() {
    var margin = 30;
    width = 700;
    height = 300;
   
    var c = p.createCanvas(width, height);
    var canvas = c.canvas;

    p.push();
    p.translate(margin,margin);
    
    //generate a random array of data. For example: [1.3,5.3,8.3,2.4,...]
    var data = d3.range(8).map(function() { return 1+Math.random() * 10; });
    
    //the line generators. .x() and .y() tell the function how to map the particular data point's values to the x and y positions.
    var lineGeneratorBasis = d3.svg.line()
      .x(function(d,i) { return p.map(i,0,8,0,width-margin*2); })
      .y(function(d,i) { return p.map(d,0,10,0,height-margin*2); })
      .interpolate('basis');
    
    var lineGeneratorLinear = d3.svg.line()
      .x(function(d,i) { return p.map(i,0,8,0,width-margin*2); })
      .y(function(d,i) { return p.map(d,0,10,0,height-margin*2); })
      .interpolate('linear');
    
    var lineGeneratorStep = d3.svg.line()
      .x(function(d,i) { return p.map(i,0,8,0,width-margin*2); })
      .y(function(d,i) { return p.map(d,0,10,0,height-margin*2); })
      .interpolate('step-before');
    
   

    p.stroke('black');
    var cPathBasis = new Path2D(lineGeneratorBasis(data));
    var cPathLinear = new Path2D(lineGeneratorLinear(data));
    var cPathStep = new Path2D(lineGeneratorStep(data));
    
    p.strokeWeight(3);
    p.stroke('#033E8C');
    canvas.getContext('2d').stroke(cPathBasis);
    p.stroke('#F2B705');
    canvas.getContext('2d').stroke(cPathLinear);
    p.stroke('#00D96F');
    canvas.getContext('2d').stroke(cPathStep);
    
    p.fill('#fff');
    p.stroke('#000');
    p.strokeWeight(1);
    for(var i = 0; i < data.length; i++) {
      p.ellipse(p.map(i,0,8,0,width-margin*2),p.map(data[i],0,10,0,height-margin*2), 10, 10)
    }
       
  }
}