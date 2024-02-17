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
let song;
let a;
let b;


function preload() {
    song = loadSound('starwarsintro.mp3');
  }

function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
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
    
    
    song.play();
    a = canvasContainer.height();
    b = canvasContainer.height() + 70;
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
  background(0);
  textSize(100);
  fill(500, 300, 0);
  textAlign(CENTER);
  text('Experiment 6\n', canvasContainer.width() / 2, a);
  
  textSize(50);
  text('A long time ago (this morning)\n at Family Student Housing\n I really didnt wanna go to class\n I was feeling super stressed\n Because I spent the last two\n days basically doing nothing\n I was feeling super lazy\n and wanted to just stay in bed\n so I did and now I feel\n even more behind\n if I continute to do this\n I might not get\n good grades\n a power struggle\n within me has been\n raging for years now,\n part of me really wants\n to get good grades\n but the other part\n of me wants to stay in bed\n as this war drags on inside me\n the forces of sleepiness\n continue to grow stronger\n I fear it may be too late\n for me to change my sleeping habits\n but I must continue on the path\n to self improvement', canvasContainer.width()/2, b);
  
  a = a - 0.5;
  b = b - 0.5;
};

function mouseClicked() {
    if (song.isPlaying()) {
      song.pause();
      noLoop();
    } else {
      song.play();
      loop();
    }
  }