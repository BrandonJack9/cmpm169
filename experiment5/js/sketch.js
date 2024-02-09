// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height(), WEBGL);
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    // create an instance of the class
    myInstance = new MyClass(VALUE1, VALUE2);

    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    
       
    // call a method on the instance
    myInstance.myMethod();

    // Put drawings here
    
    background(250);
    let radius = width * 1.5;

    //drag to move the world.
    orbitControl();

    fill(500, 500, 500)
    triangle(30, 55, 58, 90, 86, 55);
    translate(95, 0, -30);
  
    fill(250, 120, 0);
    rotateX(1.55);
    sphere(40);

 
 
    fill(500, 0, 500);
    translate(-35, -50, -20);
    scale(2);
    box(80);
  
    fill(250, 120, 0);
    rotateX(.05);
    scale(.5)
    translate(-35, 50, 15)
    sphere(40);
   
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}