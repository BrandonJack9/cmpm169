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

let song;
let fft;
let hu = 0;
let r;

function preload() {
	//Music by ItsWatR from Pixabay
  song = loadSound("js/Ever_Flowing.mp3");
}

function setup() {
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height(), WEBGL);
    canvas.parent("canvas-container");
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    // create an instance of the class
    myInstance = new MyClass(VALUE1, VALUE2);

    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;
    angleMode(DEGREES);
    song.play();
    fft = new p5.FFT();
}

function draw() {
  background(0);
  //stroke(255);
  strokeWeight(10);
  noFill();

  translate(width / 2, height / 2);

  let wave = fft.waveform();
  for (let t = -1; t <= 1; t += 2) {
    beginShape();
    for (let i = 0; i <= 180; i += 0.5) {
      
      let index = floor(map(i, 0, 180, 0, wave.length - 1));

      let r = map(wave[index], -1, 1, 150, 350);

      let x = r * sin(i) * t;
      let y = r * cos(i);
      vertex(x, y);
    }
    endShape();
  }
  for (let t = -1; t <= 1; t += 2) {
    stroke((85+hu)%255, 200, 255);
    beginShape();
    for (let i = 0; i <= 180; i += 0.5) {
  
    let index = floor(map(i, 0, 180, 0, wave.length - 1));

    r = map(wave[index], -1, 1, 100, 300);

    let x = r * sin(i) * t;
    let y = r * cos(i);
    vertex(x, y);
    }
    endShape();
    }
    fill((170+hu)%255, 200, 255);
    noStroke();
    ellipse(0, 0, r);
    ellipse(0, r, 0);
    ellipse(r, 0, 0);
    hu++;
 
  
};


/*function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
    noLoop();
  } else {
    song.play();
    loop();
  }
}*/

  