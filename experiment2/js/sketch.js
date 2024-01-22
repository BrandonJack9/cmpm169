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

function  preload(){
    shadow = loadModel('assets/shadow.obj', true);
}

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    /*canvasContainer = $("#canvas-container");
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
    var centerVert = windowHeight / 2;*/
    createCanvas(710, 400, WEBGL);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
       
    // call a method on the instance
    /*myInstance.myMethod();

    // Put drawings here
    
    background(250);
    let radius = width * 1.5;

    //drag to move the world.
    orbitControl();

    normalMaterial();
    translate(0, 0, -600);
    
    for (let i = 0; i <= 12; i++) {
        for (let j = 0; j <= 12; j++) {
        push();
        let a = (j / 12) * PI;
        let b = (i / 12) * PI;
        translate(
            sin(2 * a) * radius * sin(b),
            (cos(b) * radius) / 2,
            cos(2 * a) * radius * sin(b)
        );
        if (j % 2 === 0) {
            sphere(30, 30);
        } else {
            box(30, 30, 30);
        }
        pop();
        }
    }*/
    background(200);
    scale(0.4); // Scaled to make model fit into canvas
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial(); // For effect
    model(shadow);
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}