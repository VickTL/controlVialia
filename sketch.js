let myp5 = new p5(s, document.getElementById('colores'));

let img;
let cx, cy;


function preload() {
  img = loadImage('PALETA.png');
}

function setup() {
  createCanvas(450, 200);

  cx = width/2;
  cy = height/2;
}

function draw() {
  image(img, 0, 0, width-50, height);

  stroke(255); strokeWeight(2); noFill();
  circle(cx, cy, 15);

  if(mouseIsPressed && mouseX<width-50 && mouseX>0 && mouseY>0 && mouseY<height) {
    cx = mouseX;
    cy = mouseY;


    stroke(255); strokeWeight(1);
    line(cx, 0, cx, height);
    line(0, cy, width, cy);
  }


  var hueC = floor(map(cx, 0, width-50, 0, 100));
  var valC = floor(map(cy, 0, height, 0, 100));
  var satC = 100;

  colorMode(HSB, 100, 100, 100);
  var col = color(hueC, satC, valC);
  fill(col); noStroke();
  rect(width-48, 0, width, height);
}

// salida: hueC, satC, valC
