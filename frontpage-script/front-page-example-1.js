
var example1 = function(p) {
  var customDom, circle;


  p.setup = function() {

    //Create a D3 object bound to a custom DOM element. This element will not appear on screen, but in our script's eyes, it will have the same methods and properties as any other element.
    customDom = d3.select('body').append('customDOM');

    //Create the p5 canvas
    var width = 640,
        height = 100,
        margin = 30,
        transitionDuration = 2000;

    p.createCanvas(width + margin*2, height + margin*2);
    p.stroke("#fff");

    //Append a circle to the customDom object. Add in custom attributes that will be later used by p5 to draw shapes.
    circle = customDom.append('customCircle')
      .classed('circle', true)
      .attr('radius', 60)
      .attr('xPos', 40)
      .attr('yPos', 50);

      

    setInterval(refresh, 2000);
    refresh();

    function refresh() {
      circle
        .transition()
        .duration(2000)
        .attr('radius', 20+p.random(40))
        .attr('xPos', p.random(margin, width-margin))
        .attr('yPos', p.random(margin, height-margin)) 
        .attr('rotation', p.random(-20, 20));
    }


  }



  p.draw = function()  {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    //Using D3, we select the circle customObject. We can use .attr('attribute-name') to access the values attached to the circle object's attributes. 
    var thisObject = customDom.select('.circle');
    p.push();
    p.translate(thisObject.attr('xPos'),thisObject.attr('yPos'));
    p.rotate(thisObject.attr('rotation'));

    p.fill("#033E8C");
    p.ellipse(0, 
            -9,
            thisObject.attr('radius'),
            thisObject.attr('radius'));

    p.fill("#F2B705");
    p.ellipse(10, 
            -9 + 10 * Math.pow(3,.5),
            thisObject.attr('radius'),
            thisObject.attr('radius'));

    p.fill("#00D96F");
    p.ellipse(-10, 
            -9 + 10 * Math.pow(3,.5),
            thisObject.attr('radius'),
            thisObject.attr('radius'));

    p.pop();


  }
}
