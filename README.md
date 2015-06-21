The p5 D3 Cookbook
==================
The p5 D3 Cookbook is a repository of documented examples for integrating the features of [D3](http://d3js.org/) into the [p5.js library](http://p5js.org/). D3.js offers a wealth of tools for manipulating data and connecting data to visual representations. p5.js, whose goal is to make coding accessible for artists, designers, educators, and beginners, provides a environment where users can sketch their ideas in code. Used together, these two libraries can be used for a range of applications from introducing beginners to data visualization to creating canvas-based visualizations that take advantage of D3.

Thanks
--------------
A special thanks to [@iros](https://github.com/iros) for her great [blog post](http://bocoup.com/weblog/d3js-and-canvas/) that laid out a lot of the initial ideas in this repository. Thanks @sepans for creating initial examples.

Structure
--------------
This cookbook is divided into three folders:
* **beginner** requires no knowledge of D3. These example feature useful functions that can be inserted into a p5 sketch with minimal knowledge.
* **intermediate** requires understanding D3 selections and how D3 interacts with the DOM. 
* **advanced** requires understanding D3 data binding, for example `.selectAll().data().enter()`

Installing the Libraries
------------------------
To begin using any of these examples, you will need to include the p5 and D3 libraries. Both [D3](https://github.com/mbostock/d3/wiki) and [p5](http://p5js.org/get-started/) have installation instructions with additional details. If you are familiar with javascript, you will need to ensure that both libraries are included before you include your javascript code.

    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.js" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.5/p5.js"></script>
    <script>
        function setup() { }
        function draw() { }
        function mousePressed() { }
        ...
    </script>


Contributing
------------
Like using both D3 and p5? Got an idea or technique on how to integrate? Please add an example and make a pull request. Make sure your examples are pretty well documented. A link to CodePen or similar service would be a plus.

Don't like pull requests? Add an issue with a link to CodePen and we'll add the example for you. 

[Blank CodePen with D3 and p5 already loaded.](http://codepen.io/SciutoAlex/pen/doVmOX)
