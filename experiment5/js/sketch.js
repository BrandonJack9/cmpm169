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

let shadow;
let mytexture;

function preload() {
  // Load model with normalise parameter set to true
  shadow = loadModel("js/shadow.obj", true);
  mytexture = loadImage("js/texture.png");
  //textureMode(NORMAL);
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
    
    background(0);

    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    
    let radius = width * 1.5;

    //drag to move the world.
    orbitControl();

    spotLight(500, 0, 500, 50, -30, 250, 0, 0, -1);
    spotLight(500, 0, 500, -50, -30, 250, 0, 0, -1);
    pointLight(500, 350, 250, locX, locY, 250);

    texture(mytexture);
    rotateZ(3.14);
    //fill(500, 0, 500);
    model(shadow);
    
   
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}