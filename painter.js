function painter() {
  if (stateOfArrayIndex == 0) {
    getRect17();
  } else if (stateOfArrayIndex == 1) {
    getRect7();
  } else if (stateOfArrayIndex == 2) {
    getRect5();
  } else if (stateOfArrayIndex == 3) {
    getRect4();
  } else if (stateOfArrayIndex == 4) {
    quantized();
  } else if (stateOfArrayIndex == 5) {
    jazz();
  } else if (stateOfArrayIndex == 6) {
    zoomOut();
  } else if (stateOfArrayIndex == 7) {
    sketch();
  } else if (stateOfArrayIndex == 8) {
    sketchCircles();
  } else if (stateOfArrayIndex == 9) {
    algo();
  } else if (stateOfArrayIndex == 10) {
    bitrot();
  } else if (stateOfArrayIndex == 11) {
    clouds();
  } else if (stateOfArrayIndex == 12) {
    progressBars();
  } else if (stateOfArrayIndex == 13) {
    commonGround();
  } else if (stateOfArrayIndex == 14) {
    satellites();
  } else if (stateOfArrayIndex == 15) {
    lanes();
  } else if (stateOfArrayIndex == 16) {
    floorPlan();  
  } else if (stateOfArrayIndex == 17) {
    vines();  
  } else if (stateOfArrayIndex == 18) {
    encodedTransmission();  
  } else if (stateOfArrayIndex == 19) {
    drawnWaveforms();      
  }
}

function drawnWaveforms() {

  strokeWeight(0.3);
  rectMode(CENTER);  

    stroke(0, 70);
    fill(col4);
    scribble.scribbleEllipse(x, 0, 4, 72 * fxrand());

    stroke(0, 70);
    fill(col4);
    scribble.scribbleEllipse(x, 800, 4, 72 * fxrand());

    scribble.scribbleRect(x, 0, 32, 80);
    scribble.scribbleRect(x, 0, 32, 1);

    scribble.scribbleRect(x, 100, 32, 80);
    scribble.scribbleRect(x, 100, 32, 1);

    scribble.scribbleRect(x, 200, 32, 80);
    scribble.scribbleRect(x, 200, 32, 1);

    scribble.scribbleRect(x, 300, 32, 80);
    scribble.scribbleRect(x, 300, 32, 1);

    scribble.scribbleRect(x, 400, 32, 80);
    scribble.scribbleRect(x, 400, 32, 1);

    scribble.scribbleRect(x, 500, 32, 80);
    scribble.scribbleRect(x, 500, 32, 1);

    scribble.scribbleRect(x, 600, 32, 80);
    scribble.scribbleRect(x, 600, 32, 1);

    scribble.scribbleRect(x, 700, 32, 80);
    scribble.scribbleRect(x, 700, 32, 1);

    scribble.scribbleRect(x, 800, 32, 80);
    scribble.scribbleRect(x, 800, 32, 1);

    stroke(0, 127);
    strokeWeight(fxrand() * 2 + 1);
    
  if (fxrand() > 0.1) {
    fill(col1);
    scribble.scribbleEllipse(x, 100, spacingArrayIndex, 72 * fxrand());  
  }

  if (fxrand() > 0.2) {
    fill(col2);
    scribble.scribbleEllipse(x, 200, spacingArrayIndex, 72 * fxrand());
  }

  if (fxrand() > 0.3) {
    fill(col3);
    scribble.scribbleEllipse(x, 300, spacingArrayIndex, 72 * fxrand());
  }

  if (fxrand() > 0.4) {
    fill(col4);
    scribble.scribbleEllipse(x, 400, spacingArrayIndex, 72 * fxrand());
  }

  if (fxrand() > 0.5) {
    fill(col3);
    scribble.scribbleEllipse(x, 500, spacingArrayIndex, 72 * fxrand());
  }

  if (fxrand() > 0.6) {
    fill(col2);
    scribble.scribbleEllipse(x, 600, spacingArrayIndex, 72 * fxrand());
  }

  if (fxrand() > 0.7) {
    fill(col1);
    scribble.scribbleEllipse(x, 700, spacingArrayIndex, 72 * fxrand());
  }


  if (x < width + 320) {
    x = x + spacing; 
  }

}

function encodedTransmission() {

  strokeWeight(1);
  rectMode(CENTER);  

  
  stroke(0);


  if (fxrand() > 0.1) {  
    stroke(0);
    fill(col4);
    scribble.scribbleEllipse(x, 250, 8 * spacingArrayIndex * fxrand() + 1, 96 * fxrand() + 1);
  }

    noFill();
    scribble.scribbleEllipse(x, 250, 8 * spacingArrayIndex* fxrand() + 1, 96 * fxrand() + 1);

  if (fxrand() > 0.1) {  
    stroke(0);
    fill(col4);
    scribble.scribbleEllipse(x, 550, 8 * spacingArrayIndex * fxrand() + 1, 128 * fxrand() + 1);
  }

    noFill();
    scribble.scribbleEllipse(x, 550, 8 * spacingArrayIndex * fxrand() + 1, 96 * fxrand() + 1);

  if (fxrand() > 0.1) {
    fill(col2);
    scribble.scribbleEllipse(x, 400, 8, 144 * fxrand());
  }

  fill(0);
  rect(x, 250, 32, 1);
  rect(x, 400, 32, 1);
  rect(x, 550, 32, 1);
  
  
    stroke(0);
    scribble.scribbleRect(x, 100, 12 * spacingArrayIndex, 96 * fxrand() * 1.2);
    scribble.scribbleRect(x, 700, 12 * spacingArrayIndex, 96 * fxrand() * 1.2);
    stroke(0);
    fill(col3);
    rect(x, 100, 12, 64);
    rect(x, 700, 12, 64);
  

  

  if (x < width + 100) {
    x = x + spacing * 3;
  }

}

function vines() {

    strokeWeight(fxrand() * 3);
    noFill();

    fill(col1);
    stroke(0);
    scribble.scribbleEllipse(x, 150, 24 * spacingArrayIndex, 144 * fxrand() * 0.5 + 1);
 
    fill(col2);
    stroke(0);
    scribble.scribbleEllipse(x, 150, 16 * spacingArrayIndex, 96 * fxrand() * 2 + 1);
 
    fill(col3);
    stroke(0);
    scribble.scribbleEllipse(x, 150, 12 * spacingArrayIndex, 32 * fxrand() * 3 + 1);
 
    fill(col2);
    stroke(0);
    scribble.scribbleEllipse(x, 400, 24 * spacingArrayIndex, 144 * fxrand() * 0.5 + 1);
 
    fill(col3);
    stroke(0);
    scribble.scribbleEllipse(x, 400, 16 * spacingArrayIndex, 96 * fxrand() * 2 + 1);
 
    fill(col1);
    stroke(0);
    scribble.scribbleEllipse(x, 400, 12 * spacingArrayIndex, 32 * fxrand() * 3 + 1);
 
    fill(col3);
    stroke(0);
    scribble.scribbleEllipse(x, 650, 24 * spacingArrayIndex, 144 * fxrand() * 0.5 + 1);
 
    fill(col1);
    stroke(0);
    scribble.scribbleEllipse(x, 650, 16 * spacingArrayIndex, 96 * fxrand() * 2 + 1);
 
    fill(col2);
    stroke(0);
    scribble.scribbleEllipse(x, 650, 12 * spacingArrayIndex, 32 * fxrand() * 3 + 1);
 

   if (x < width + 320) {
      x = x + spacing; 
   }
}


function floorPlan() {

  rectMode(CENTER);  

  strokeWeight(fxrand() * 3);
  stroke(0);
  fill(col1);
  rect(x, 0, blockWidth * spacingArrayIndex, blockHeight * fxrand() * 2);

  stroke(0);
  fill(col3);
  rect(x, 200, blockWidth * spacingArrayIndex * fxrand(), blockHeight * fxrand() * 2);    

  stroke(0);
  fill(col1);
  rect(x, 400, blockWidth * spacingArrayIndex * fxrand(), blockHeight * fxrand() * 2);    

  stroke(0);
  fill(col3);
  rect(x, 600, blockWidth * spacingArrayIndex * fxrand(), blockHeight * fxrand() * 2);    

  stroke(0);
  fill(col1);
  rect(x, 800, blockWidth * spacingArrayIndex, blockHeight * fxrand() * 2);    


  strokeWeight(1);
  stroke(0);
  fill(col2);
  rect(x, 100, blockWidth * spacingArrayIndex, blockHeight * fxrand() * 0.75);

  stroke(0);
  fill(col4);
  rect(x, 300, blockWidth * spacingArrayIndex, blockHeight * fxrand() * 0.75);    

  stroke(0);
  fill(col4);
  rect(x, 500, blockWidth * spacingArrayIndex, blockHeight * fxrand() * 0.75);    

  stroke(0);
  fill(col2);
  rect(x, 700, blockWidth * spacingArrayIndex, blockHeight * fxrand() * 0.75);    

  if (x < width + 340) {
    x = x + spacing; 
  }

}

function lanes() {

  strokeWeight(1);
  rectMode(CENTER);  

  
  noFill();
  stroke(0);

  if (fxrand() > 0.1) {
    scribble.scribbleEllipse(x, 0, 4, blockHeight * fxrand() * 1);
  }
  if (fxrand() > 0.1) {
    scribble.scribbleEllipse(x, 800, 4, blockHeight * fxrand() * 1);
  }
  
  fill(col1);
  rect(x, 50, blockWidth / spacingArrayIndex, blockHeight * fxrand() * 0.5);
  fill(col2);
  rect(x, 100, blockWidth / spacingArrayIndex, blockHeight * fxrand() * 1);
  fill(col3);
  rect(x, 150, blockWidth / spacingArrayIndex, blockHeight * 0.3);
  fill(col4);
  rect(x, 200, blockWidth / spacingArrayIndex, blockHeight * fxrand() * 1);
  fill(col3);
  rect(x, 250, blockWidth / spacingArrayIndex, blockHeight * 0.3);
  fill(col2);
  rect(x, 300, blockWidth / spacingArrayIndex, blockHeight * fxrand() * 1);
  fill(col3);
  rect(x, 350, blockWidth / spacingArrayIndex, blockHeight * 0.3);
  fill(col4);
  rect(x, 400, blockWidth / spacingArrayIndex, blockHeight * fxrand() * 1);
  fill(col3);
  rect(x, 450, blockWidth / spacingArrayIndex, blockHeight * 0.3);
  fill(col2);
  rect(x, 500, blockWidth / spacingArrayIndex, blockHeight * fxrand() * 1);
  fill(col3);
  rect(x, 550, blockWidth / spacingArrayIndex, blockHeight * 0.3);
  fill(col4);
  rect(x, 600, blockWidth / spacingArrayIndex, blockHeight * fxrand() * 1);
  fill(col3);
  rect(x, 650, blockWidth / spacingArrayIndex, blockHeight * 0.3);
  fill(col2);
  rect(x, 700, blockWidth / spacingArrayIndex, blockHeight * fxrand() * 1);
  fill(col1);
  rect(x, 750, blockWidth / spacingArrayIndex, blockHeight * fxrand() * 0.5);

  if (x < width + 320) {
    x = x + spacing; 
  }

}

function satellites() {

  strokeWeight(1);
  rectMode(CENTER);  
  noFill();

   if (fxrand() > 0.1) {
     stroke(0);
     fill(col1);
     rect(x, 400, blockWidth / spacingArrayIndex, blockHeight * Math.ceil(fxrand() * 6));
     scribble.scribbleRect(x, 400, blockWidth / spacingArrayIndex, blockHeight * Math.ceil(fxrand() * 8));
   }

    if (fxrand() > 0.1) {
     stroke(0);
     fill(col2);
     scribble.scribbleEllipse(x, 400, blockWidth / spacingArrayIndex, blockHeight * Math.ceil(fxrand() * 3));
   }

    if (fxrand() > 0.8) {
     stroke(0);
     fill(col2);
     scribble.scribbleEllipse(x, 700, 4 * spacingArrayIndex, blockHeight * Math.ceil(fxrand() * 3));
   }

   if (fxrand() > 0.8) {
     stroke(0);
     fill(col2);
     scribble.scribbleEllipse(x, 100, 4 * spacingArrayIndex, blockHeight * Math.ceil(fxrand() * 3));
   }
   
   if (fxrand() > 0.3) {
     stroke(0);
     noFill();
     scribble.scribbleEllipse(x, 700, 4 * spacingArrayIndex, blockHeight * fxrand() * 1);
   }

   if (fxrand() > 0.3) {
     stroke(0);
     noFill();
     scribble.scribbleEllipse(x, 100, 4 * spacingArrayIndex, blockHeight * fxrand() * 1);
   }
    
   if (x < width + 100) {
      x = x + spacing; 
   }
}


function sketchCircles() {

  strokeWeight(1);
  rectMode(CENTER);  
  noFill();

  stroke(0);
  fill(col1);
  scribble.scribbleEllipse(x, 0, 2 * spacingArrayIndex, blockHeight * Math.floor(fxrand() * 2 + 2));

  if (fxrand() > 0.1) {
    stroke(0);
    fill(col2);
    scribble.scribbleEllipse(x, 150, 12 * spacingArrayIndex, 12 * spacingArrayIndex * fxrand() + 16);
  }

  if (fxrand() > 0.5) {
    stroke(col3);
    scribble.scribbleRect(x, 400, blockWidth / 4, blockHeight * Math.floor(fxrand() * 6 + 2));
  }

  if (fxrand() > 0.7) {
    stroke(0);
    fill(col4);
    rect(x, 400, 4 * spacingArrayIndex, blockHeight * Math.floor(fxrand() * 4 + 2));
  }

  if (fxrand() > 0.1) {
    stroke(0);
    fill(col2);
    scribble.scribbleEllipse(x, 650, 12 * spacingArrayIndex, 12 * spacingArrayIndex * fxrand() + 16);
  }

  stroke(0);
  fill(col1);
  scribble.scribbleEllipse(x, 800, 2 * spacingArrayIndex, blockHeight * Math.floor(fxrand() * 2 + 2));

   if (x < width + 100) {
      x = x + spacing; 
   }
}

function commonGround() {

  strokeWeight(1);
  rectMode(CENTER);  
  noFill();



  if (fxrand() > 0.5) {
    stroke(0);
    fill(col3);
    scribble.scribbleEllipse(x, 600, 8 * spacingArrayIndex, 96 * fxrand() * 2 + 1);
  }

  if (fxrand() > 0.1) {
    stroke(0);
    scribble.scribbleEllipse(x, 600, 8 * spacingArrayIndex, 32 * fxrand() * 2 + 1);
  }

  if (fxrand() > 0.1) {
    stroke(0);
    scribble.scribbleEllipse(x, 600, 8 * spacingArrayIndex, 16 * fxrand() * 2 + 1);
  }

  if (fxrand() > 0.1) {
    stroke(0);
    fill(col4);
    scribble.scribbleEllipse(x, 800, 8 * spacingArrayIndex, 32 * fxrand() * 2 + 1);
  }


  stroke(0)
  fill(col3);
  rect(x, 200, 12 * spacingArrayIndex, 32 * fxrand() * 5 + 1);

  scribble.scribbleRect(x, 200, 12 * spacingArrayIndex, 32 * fxrand() * 5 + 1);

  fill(col4);
  rect(x, 0, 16, 16 * Math.ceil(fxrand() * 4 + 1));

  if (fxrand() > 0.4) {
    fill(col2);
    rect(x, 400, 4 * spacingArrayIndex, 32 * fxrand() * 2 + 1);
  }

  if (fxrand() > 0.9) {
    stroke(0);
    fill(col1);
    scribble.scribbleEllipse(x, 400, 4 * spacingArrayIndex, 48 * fxrand() * 2 + 1);
  }

  if (fxrand() > 0.9) {
    stroke(0);
    scribble.scribbleRect(x, 400, 4 * spacingArrayIndex, 64 * fxrand() * 2 + 1);
  }


   if (x < width + 320) {
      x = x + spacing; 
   }
}


function progressBars() {

  strokeWeight(1);
  rectMode(CENTER);  
  noFill();

  stroke(col1);
  scribble.scribbleRect(x, 0, fxrand() * 700 + 20, blockHeight * fxrand() * 1 + 2);
  stroke(col2);
  scribble.scribbleRect(x, 100, fxrand() * 700 + 20, blockHeight * Math.floor(fxrand() * 1 + 1));
  stroke(col3);
  scribble.scribbleRect(x, 200, fxrand() * 700 + 20, blockHeight * Math.ceil(fxrand() * 1 + 1));
  if (fxrand() > 0.1) {
    stroke(0);
    fill(col4);
    scribble.scribbleEllipse(x, 400, 32, 32 * fxrand() * 2 + 1);
  }
  stroke(col3);
  scribble.scribbleRect(x, 300, fxrand() * 700 + 20, blockHeight * fxrand() * 0.5 + 2);
  stroke(col1);
  scribble.scribbleRect(x, 500, fxrand() * 700 + 20, blockHeight * Math.floor(fxrand() * 1 + 1));
  stroke(col2);
  scribble.scribbleRect(x, 600, fxrand() * 700 + 20, blockHeight * Math.floor(fxrand() * 1 + 1));
  stroke(col3);
  scribble.scribbleRect(x, 700, fxrand() * 700 + 20, blockHeight * Math.ceil(fxrand() * 1 + 1));
  stroke(col1);
  scribble.scribbleRect(x, 800, blockWidth / 4, blockHeight * fxrand() * 1 + 2);

   if (x < width + 100) {
      x = x + spacing; 
   }
}


function sketch() {

  strokeWeight(1);
  rectMode(CENTER);  
  noFill();

  stroke(col1);
  scribble.scribbleRect(x, 0, blockWidth / 4, blockHeight * Math.floor(fxrand() * 2 + 2));
  stroke(col1);
  scribble.scribbleRect(x, 800, blockWidth / 4, blockHeight * Math.floor(fxrand() * 2 + 2));
  stroke(col4);
  scribble.scribbleRect(x, 400, blockWidth / 4, blockHeight * Math.ceil(fxrand() * 6 + 2));
  if (fxrand() > 0.75) {
    stroke(0);
    fill(col3);
    rect(x, 400, blockWidth / 4, blockHeight * Math.ceil(fxrand() * 3 + 1));
  }
  stroke(col2);
  scribble.scribbleRect(x, 100, blockWidth / 4, blockHeight * fxrand() * 0.5 + 2);
  stroke(col2);
  scribble.scribbleRect(x, 700, blockWidth / 4, blockHeight * fxrand() * 0.5 + 2);

   if (x < width + 100) {
      x = x + spacing; 
   }
}


function jazz() {
       
       stroke(0);
       strokeWeight(fxrand() * 16 + 1);
       rectMode(CENTER);  

       if (fxrand() > 0.9) {
         fill(col2);
         rect(x, 100, blockWidth / 4, blockHeight * Math.floor(fxrand() * 2 + 2)); 
       }
       
       if (fxrand() > 0.8) {
         fill(col3);
         rect(x, 200, blockWidth / 4, blockHeight * Math.floor(fxrand() * 2 + 2));
       }
       if (fxrand() > 0.9) {
         fill(col4);
         rect(x, 300, blockWidth / 4, blockHeight * Math.floor(fxrand() * 2 + 2));
       }
       if (fxrand() > 0.9) {
         fill(col1);
         rect(x, 400, blockWidth / 4, blockHeight * Math.floor(fxrand() * 2 + 2));
       }
       if (fxrand() > 0.9) {
         fill(col2);
         rect(x, 500, blockWidth / 4, blockHeight * Math.floor(fxrand() * 2 + 2));
       }
       if (fxrand() > 0.8) {
         fill(col3);
         rect(x, 600, blockWidth / 4, blockHeight * Math.floor(fxrand() * 2 + 2));
       }
       if (fxrand() > 0.9) {
         fill(col4);
         rect(x, 700, blockWidth / 4, blockHeight * Math.floor(fxrand() * 2 + 2));
       }
       
       if (x < width + 100) {
          x = x + spacing; 
       }
}


function bitrot() {
       
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);  

       // fill(col4);
       // rect(x, 0, blockWidth / 8, blockHeight * fxrand() * 2);
       if (fxrand() > 0.3) {
       fill(col1);
       rect(x, 0, blockWidth / 4, blockHeight * Math.ceil(fxrand() * 3) + 1);
       }
       if (fxrand() > 0.9) {
         fill(col2);
         rect(x, 150, blockWidth / 6, blockHeight * Math.ceil(fxrand() * 2) + 1);
       }
       if (fxrand() > 0.5) {
         fill(col3);
         rect(x, 200, blockWidth / 8, blockHeight * Math.ceil(fxrand() * 2) + 1);
       }
       if (fxrand() > 0.1) {
         scribble.scribbleEllipse(x, 300, 32 * fxrand() + 16, 32 * fxrand() + 16);
       }
       if (fxrand() > 0.1) {
         scribble.scribbleEllipse(x, 500, 32 * fxrand() + 16, 32 * fxrand() + 16);
       }
       if (fxrand() > 0.6) {
         fill(col4);
         rect(x, 400, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       }
       if (fxrand() > 0.9) {
         fill(col1);
         rect(x, 400, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       }
       if (fxrand() > 0.5) {
         fill(col3);
         rect(x, 600, blockWidth / 8, blockHeight * Math.ceil(fxrand() * 2) + 1);
       }
       if (fxrand() > 0.9) {
         fill(col2);
         rect(x, 650, blockWidth / 6, blockHeight * Math.ceil(fxrand() * 2) + 1);
       }
       if (fxrand() > 0.3) {         
         fill(col1);
         rect(x, 800, blockWidth / 4, blockHeight * Math.ceil(fxrand() * 3) + 1);
       }
       // fill(col4);
       // rect(x, 800, blockWidth / 8, blockHeight * fxrand() * 2);

       if (x < width + 100) {
          x = x + spacing; 
       }
}


function clouds() {
       
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);  

       
       if (fxrand() > 0.1) {
         stroke(col2);
         scribble.scribbleRect(x, 200, 32 * fxrand() + 16, 32 * fxrand() + 16);
       }
       if (fxrand() > 0.1) {
         stroke(col4);
         scribble.scribbleRect(x, 600, 32 * fxrand() + 16, 32 * fxrand() + 16);
       }
       if (fxrand() > 0.1) {
         stroke(0);
         fill(col1);
         rect(x, 400, 32 * fxrand() + 16, 64 * fxrand() + 16);
       }
       if (fxrand() > 0.1) {
         stroke(0);
         fill(col2);
         rect(x, 300, 32 * fxrand() + 16, 64 * fxrand() + 16);
       }
       if (fxrand() > 0.1) {
         stroke(0);
         fill(col3);
         rect(x, 500, 32 * fxrand() + 16, 64 * fxrand() + 16);
       }

       if (fxrand() > 0.05) {
         stroke(col3);
         fill(bg);
         scribble.scribbleEllipse(x, 0, 256 * fxrand() + 16, 256 * fxrand() + 16);
       }
       if (fxrand() > 0.9) {
        fill(col1);
         scribble.scribbleEllipse(x, 800, 256 * fxrand() + 16, 256 * fxrand() + 16);
       }

       if (x < width + 300) {
          x = x + spacing; 
       }
}


function algo() {
       
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);  

       // fill(col4);
       // rect(x, 0, blockWidth / 8, blockHeight * fxrand() * 2);
       fill(col1);
       rect(x, 100, blockWidth / 8, blockHeight * Math.ceil(fxrand() * 3) + 1);
       fill(col2);
       rect(x, 250, blockWidth / 8, blockHeight * Math.ceil(fxrand() * 2) + 1);
       fill(col3);
       rect(x, 400, blockWidth / 8, blockHeight * Math.ceil(fxrand() * 3) + 1);
       fill(col2);
       rect(x, 550, blockWidth / 8, blockHeight * Math.ceil(fxrand() * 2) + 1);
       fill(col1);
       rect(x, 700, blockWidth / 8, blockHeight * Math.ceil(fxrand() * 3) + 1);
       // fill(col4);
       // rect(x, 800, blockWidth / 8, blockHeight * fxrand() * 2);

       if (x < width + 100) {
          x = x + spacing; 
       }
}


function quantized() {
       
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);  

       fill(col1);
       rect(x, 0, blockWidth / 8, blockHeight * fxrand() * 2);
       fill(col2);
       rect(x, 250, blockWidth / 8, blockHeight * Math.ceil(fxrand() * 4) + 1);
       fill(col3);
       rect(x, 550, blockWidth / 8, blockHeight * Math.ceil(fxrand() * 4) + 1);
       fill(col4);
       rect(x, 800, blockWidth / 8, blockHeight * fxrand() * 2);

       if (x < width + 100) {
          x = x + spacing; 
       }
}

function zoomOut() {
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);       
       
       fill(col1);
       rect(x, 0, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       fill(col2);
       rect(x, 100, blockWidth / 8, blockHeight * fxrand() * 0.5 + 1);
       fill(col3);
       rect(x, 150, blockWidth / 8, blockHeight * fxrand() * 0.5 + 1);
       // fill(col4);
       // rect(x, 200, blockWidth / 8, blockHeight * fxrand() * 0.5 + 1);
       fill(col3);
       rect(x, 250, blockWidth / 8, blockHeight * fxrand() * 0.5 + 1);
       fill(col2);
       rect(x, 300, blockWidth / 8, blockHeight * fxrand() * 0.5 + 1);
       fill(col4);
       rect(x, 400, blockWidth / 8, blockHeight * fxrand() * 2 + 2);
       fill(col2);
       rect(x, 500, blockWidth / 8, blockHeight * fxrand() * 0.5 + 1);
       fill(col3);
       rect(x, 550, blockWidth / 8, blockHeight * fxrand() * 0.5 + 1);
       // fill(col4);
       // rect(x, 600, blockWidth / 8, blockHeight * fxrand() * 0.5 + 1);
       fill(col3);
       rect(x, 650, blockWidth / 8, blockHeight * fxrand() * 0.5 + 1);
       fill(col2);
       rect(x, 700, blockWidth / 8, blockHeight * fxrand() * 0.5 + 1);
       fill(col1);
       rect(x, 800, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       
       if (x < width + 100) {
          x = x + spacing; 
       }
       
} 


function getRect17() {
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);       
       
       fill(col4);
       rect(x, 0, blockWidth / 8, blockHeight * fxrand() * 0.75 + 1);
       fill(col2);
       rect(x, 50, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col3);
       rect(x, 100, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       // fill(col4);
       // rect(x, 150, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col3);
       rect(x, 200, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col2);
       rect(x, 250, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       // fill(col1);
       // rect(x, 300, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       fill(col3);
       rect(x, 350, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col4);
       rect(x, 400, blockWidth / 8, blockHeight * fxrand() * 0.3 + 1);
       fill(col3);
       rect(x, 450, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       // fill(col4);
       // rect(x, 500, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col2);
       rect(x, 550, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       fill(col3);
       rect(x, 600, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       // fill(col4);
       // rect(x, 650, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col3);
       rect(x, 700, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       fill(col2);
       rect(x, 750, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col4);
       rect(x, 800, blockWidth / 8, blockHeight * fxrand() * 0.75 + 1);
       
       if (x < width + 100) {
          x = x + spacing; 
       }
       
} 

function getRect7() {
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);       
       
       fill(col1);
       rect(x, 100, blockWidth / 8, blockHeight * fxrand() + 24);
       fill(col2);
       rect(x, 200, blockWidth / 16, blockHeight * fxrand() + 2); 
       fill(col3);
       rect(x, 300, blockWidth / 8, blockHeight * fxrand() + 24); 
       fill(col4);
       rect(x, 400, blockWidth / 4, blockHeight * fxrand() + 2); 
       fill(col1);
       rect(x, 500, blockWidth / 8, blockHeight * fxrand() + 24); 
       fill(col2);
       rect(x, 600, blockWidth / 16, blockHeight * fxrand() + 2); 
       fill(col3);
       rect(x, 700, blockWidth / 8, blockHeight * fxrand() + 24); 
       
       
       if (x < width + 100) {
          x = x + spacing; 
       }
       
} 

function getRect5() {
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);       
       
       fill(col3);
       rect(x, 200, blockWidth / 8, blockHeight * fxrand() + 4); 
       fill(col2);
       rect(x, 300, blockWidth / 4, blockHeight * fxrand() + 2); 
       fill(col1);
       rect(x, 400, blockWidth / 8, blockHeight * fxrand() + 24); 
       fill(col2);
       rect(x, 500, blockWidth / 16, blockHeight * fxrand() + 2); 
       fill(col3);
       rect(x, 600, blockWidth / 8, blockHeight * fxrand() + 24); 
       
       
       if (x < width + 100) {
          x = x + spacing; 
       }
       
} 

function getRect4() {
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);       
       fill(col1);
       rect(x, 100, blockWidth / 4, blockHeight * fxrand() * 2 + 1); 
       fill(col2);
       rect(x, 300, blockWidth / 8, blockHeight * fxrand() * 2 + 1); 
       fill(col3);
       rect(x, 500, blockWidth / 16, blockHeight * fxrand() * 2 + 1); 
       fill(col4);
       rect(x, 700, blockWidth / 16, blockHeight * fxrand() * 2 + 1); 
       
       
       if (x < width + 100) {
          x = x + spacing; 
       }
       
} 
