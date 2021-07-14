var s1 = function(sketch) {
  let img;
  let cx, cy, h, w;

  sketch.preload = function() {
    img = sketch.loadImage('PALETA.png');
  }

  sketch.setup = function() {
    let c1 = sketch.createCanvas(document.getElementById('colores').offsetWidth, document.getElementById('colores').offsetHeight);
    //c1.position(0,0);

    cx = c1.width/2;
    cy = c1.height/2;

    w = c1.width;
    h = c1.height;
  }

  sketch.draw = function() {
    sketch.image(img, 0, 0, w-50, h);

    sketch.stroke(255); sketch.strokeWeight(2); sketch.noFill();
    sketch.circle(cx, cy, 25);

    if(sketch.mouseIsPressed && sketch.mouseX<w-50 && sketch.mouseX>0 && sketch.mouseY>0 && sketch.mouseY<h) {
      cx = sketch.mouseX;
      cy = sketch.mouseY;


      sketch.stroke(255); sketch.strokeWeight(1);
      sketch.line(cx, 0, cx, h);
      sketch.line(0, cy, w, cy);
    }


    var hueC = sketch.floor(sketch.map(cx, 0, w-50, 0, 100));
    var valC = sketch.floor(sketch.map(cy, 0, h, 0, 100));
    var satC = 100;

    sketch.colorMode(sketch.HSB, 100, 100, 100);
    var col = sketch.color(hueC, satC, valC);
    sketch.fill(col); sketch.noStroke();
    sketch.rect(w-48, 0, w, h);
  }
}

new p5(s1, 'colores');
// salida: hueC, satC, valC


var s2 = function(sketch) {
   let cx, cy, w, h;


   sketch.setup = function() {
     let c2 = sketch.createCanvas(document.getElementById('origen').offsetWidth, document.getElementById('origen').offsetHeight);
     //c2.position(0, document.getElementById('colores').width+5);

     cx = c2.width/2;
     cy = c2.height/2;

     w = c2.width;
     h = c2.height;
   }

   sketch.draw = function() {
      sketch.background(0);

      sketch.stroke(255); sketch.strokeWeight(2); sketch.noFill();
      sketch.circle(cx, cy, 35);

      sketch.stroke(255); sketch.strokeWeight(3);
      sketch.line(cx, 0, cx, h);
      sketch.line(0, cy, w, cy);

      if(sketch.mouseIsPressed &&
         sketch.mouseX<w &&
         sketch.mouseX>0 &&
         sketch.mouseY>0 &&
         sketch.mouseY<h) {
        cx = sketch.mouseX;
        cy = sketch.mouseY;
      }

   }
}

new p5(s2, 'origen');

// Parte osc
var oscPort = new osc.WebSocketPort({
    url: "127.0.0.1:9000", // URL to your Web Socket server.
    metadata: true
});

oscPort.on("ready", function () {
    /* if( ) {
        oscPort.send({
            address: "/nParticulas",
            args: [
                {
                    type: "f",
                    value: 440
                }
            ]
        });

    }

    oscPort.send({
        address: "/velSumada",
        args: [
            {
                type: "f",
                value: 440
            }
        ]
    });
*/
    document.getElementById("botonReset").onclick = function() {
        oscPort.send({
            address: "/restart"
        });
    }

/*
    oscPort.send({
        address: "/tamParticulas",
        args: [
            {
                type: "f",
                value: 440
            }
        ]
    });

    oscPort.send({
        address: "/colorParticulas",
        args: [
            {
                type: "f",
                value: 440
            }
        ]
    });

    oscPort.send({
        address: "/cambiarOrigen",
        args: [
            {
                type: "f",
                value: 440
            }
        ]
    }); */
});
