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
  } else if (stateOfArrayIndex == 20) {
    decoderKey();     
  } else if (stateOfArrayIndex == 21) {
    gridRunner();      
  } else if (stateOfArrayIndex == 22) {
    bioSigns();      
  } else if (stateOfArrayIndex == 23) {
    windows();          
  } else if (stateOfArrayIndex == 24) {
    weaveform();          
  } else if (stateOfArrayIndex == 25) {
    chalkboard();          
  } else if (stateOfArrayIndex == 26) {
    slipstream();          
  } else if (stateOfArrayIndex == 27) {
    zenGarden();          
  }
}

function zenGarden() {

  rWidthFactor = fxrand() * 30 + 5;
  widthFactor = fxrand() * 30 + 5;
  heightFactor = 30;
  
  strokeWeight(1);
  stroke(0);
  
  if (x < width + 150) {
    
    factor1 = fxrand() * 400 + 25;
    factor2 = fxrand() * 400 + 25;

    strokeWeight(1);
    noFill();
    if (fxrand() > 0.993) {
      stroke(col1);
      noFill();
      scribble.scribbleEllipse(x, fxrand() * 800, factor1 + factor2, factor1 + factor2);  
    }
    if (fxrand() > 0.993) {
      stroke(col2);
      noFill();
      scribble.scribbleEllipse(x, fxrand() * 800, factor1 + factor2, factor1 + factor2);  
    }
    
    x = x + spacing; 

  } else {
    
    stroke(0);
    noFill();

    factor2 = fxrand() * 20 + 5;
    
    if (fxrand() > 0.5) {
      factorX = fxrand() * 15 * spacingArrayIndex;  
    } else {
      factorX = fxrand() * 2 * spacingArrayIndex;  
    }

    if (fxrand() > 0.5) {
      factorX1 = fxrand() * 15 * spacingArrayIndex;  
    } else {
      factorX1 = fxrand() * 2 * spacingArrayIndex;  
    }
    
    if (fxrand() > 0.5) {
      factorX2 = fxrand() * 15 * spacingArrayIndex;  
    } else {
      factorX2 = fxrand() * 2 * spacingArrayIndex;  
    }
    

    stroke(0);
    noFill();
    
    if (fxrand() > 0) {
      fill(col4);
      scribble.scribbleEllipse(fxrand() * 25 - factorX1 / 2 + 0, y, factor2 * 2, factor2 * 2);  
    }
    
    if (fxrand() > 0) {
      fill(col4);
      scribble.scribbleEllipse(fxrand() * 25 - factorX1 / 2 + 800, y, factor2 * 2, factor2 * 2);
    }


    if (fxrand() > 0) {
      fill(col3);
      scribble.scribbleEllipse(fxrand() * factorX2 - factorX / 2 + 100, y, factor2 * 0.5, factor2 * 0.5);
    }
    if (fxrand() > 0) {
      fill(col2);
      scribble.scribbleEllipse(fxrand() * factorX1 - factorX / 2 + 200, y, factor2, factor2);
    }
    if (fxrand() > 0) {
      fill(col1);
      scribble.scribbleEllipse(fxrand() * factorX2 - factorX / 2 + 300, y, factor2 * 0.5, factor2 * 0.5);
    }
    if (fxrand() > 0) {
      fill(col4);
      scribble.scribbleEllipse(fxrand() * factorX1 - factorX / 2 + 400, y, factor2 * 1.5, factor2 * 1.5);
    }
    if (fxrand() > 0) {
      fill(col1);
      scribble.scribbleEllipse(fxrand() * factorX2 - factorX / 2 + 500, y, factor2 * 0.5, factor2 * 0.5);
    }
    if (fxrand() > 0) {
      fill(col2);
      scribble.scribbleEllipse(fxrand() * factorX1 - factorX / 2 + 600, y, factor2, factor2);
    }
    if (fxrand() > 0) {
      fill(col3);
      scribble.scribbleEllipse(fxrand() * factorX2 - factorX / 2 + 700, y, factor2 * 0.5, factor2 * 0.5);
    }

    y = y + spacing / spacingArrayIndex * Math.ceil(fxrand() * 6) + 2; 

  }

}

function slipstream() {

  stroke(0);
  strokeWeight(1);
  
  fill(col4);
  rect(x, 50, 5, Math.ceil(fxrand() * 48));
  fill(col3);
  rect(x, 100, 5, Math.ceil(fxrand() * 32));
  fill(col2);
  rect(x, 150, 5, Math.ceil(fxrand() * 48));

  fill(col2);
  rect(x, 650, 5, Math.ceil(fxrand() * 48));
  fill(col3);
  rect(x, 700, 5, Math.ceil(fxrand() * 32));
  fill(col4);
  rect(x, 750, 5, Math.ceil(fxrand() * 48));

  rWidthFactor = fxrand() * 30 + 5;
  widthFactor = fxrand() * 30 + 5;
  heightFactor = 30;

  strokeWeight(fxrand() * 2 + 1);  
  if (fxrand() > 0.1) {
    stroke(0);
    fill(col2);
    scribble.scribbleEllipse(x, 250 + fxrand() * 300, fxrand() * widthFactor + heightFactor, rWidthFactor - heightFactor);
  }

  if (fxrand() > 0.1) {
    stroke(0);
    fill(col3);
    scribble.scribbleEllipse(x, 250 + fxrand() * 300, fxrand() * widthFactor + heightFactor, rWidthFactor - heightFactor);
  }

  if (fxrand() > 0.1) {
    stroke(0);
    fill(col4);
    scribble.scribbleEllipse(x, 250 + fxrand() * 300, fxrand() * widthFactor + heightFactor, rWidthFactor - heightFactor);
  }

  if (fxrand() > 0.1) {
    stroke(0);
    noFill();
    scribble.scribbleEllipse(x, 250 + fxrand() * 300, fxrand() * widthFactor + heightFactor, rWidthFactor - heightFactor);
  }

  if (fxrand() > 0.1) {
    stroke(0);
    noFill();
    scribble.scribbleEllipse(x, 250 + fxrand() * 300, fxrand() * widthFactor + heightFactor, rWidthFactor - heightFactor);
  }


  if (x < width + 150) {
    x = x + spacing; 
  }

}

function chalkboard() {

  noFill();
  
  strokeWeight(fxrand() * 2 + 1);
  
  if (fxrand() > 0.8) {
    stroke(col4);
    noFill();
    scribble.scribbleRect(x, 400, 64, 24 * Math.ceil(fxrand() * 4) + 2);
  }
  if (fxrand() > 0.8) {
    stroke(col1);
    noFill();
    scribble.scribbleRect(x, 50, 64, 64);
  }
  if (fxrand() > 0.6) {
    stroke(col2);
    noFill();
    scribble.scribbleEllipse(x, 200, 64, 24 * Math.ceil(fxrand() * 4) + 2);
  } 
  if (fxrand() > 0.8) {
    stroke(col3);
    noFill();
    scribble.scribbleEllipse(x, 300, 48, 48);
  }
  if (fxrand() > 0.8) {
    stroke(col3);
    noFill();
    scribble.scribbleEllipse(x, 500, 48, 48);
  }
  if (fxrand() > 0.6) {
    stroke(col2);
    noFill();
    scribble.scribbleEllipse(x, 600, 64, 24 * Math.ceil(fxrand() * 4) + 2);
  }
  if (fxrand() > 0.8) {
    stroke(col1);
    noFill();
    scribble.scribbleRect(x, 750, 64, 64);
  }

  if (x < height + 150) {
    x = x + spacing * 0.3 * spacingArrayIndex; 
  }
}

function weaveform() {
  
  rectMode(CENTER);

  strokeWeight(1);
  stroke(0);

  
    fill(col1);
    rect(100, y, 12 * Math.ceil(fxrand() * 4), blockHeight);
    fill(col2);
    rect(200, y, 12 * Math.ceil(fxrand() * 4), blockHeight);
    fill(col3);
    rect(300, y, 12 * Math.ceil(fxrand() * 4), blockHeight);
    fill(col4);
    rect(400, y, 12 * Math.ceil(fxrand() * 4), blockHeight);
    fill(col3);
    rect(500, y, 12 * Math.ceil(fxrand() * 4), blockHeight);
    fill(col2);
    rect(600, y, 12 * Math.ceil(fxrand() * 4), blockHeight);
    fill(col1);
    rect(700, y, 12 * Math.ceil(fxrand() * 4), blockHeight);
    
   if (y < height + 100) {
      y = y + spacing; 
   } else {

       fill(col1);
       rect(x, 100, blockWidth / 4, 12 * Math.ceil(fxrand() * 4));
       fill(col2);
       rect(x, 200, blockWidth / 4, 12 * Math.ceil(fxrand() * 4));
       fill(col3);
       rect(x, 300, blockWidth / 4, 12 * Math.ceil(fxrand() * 4));
       fill(col4);
       rect(x, 400, blockWidth / 4, 12 * Math.ceil(fxrand() * 4));
       fill(col3);
       rect(x, 500, blockWidth / 4, 12 * Math.ceil(fxrand() * 4));
       fill(col2);
       rect(x, 600, blockWidth / 4, 12 * Math.ceil(fxrand() * 4));
       fill(col1);
       rect(x, 700, blockWidth / 4, 12 * Math.ceil(fxrand() * 4));

       if (x < height + 100) {
          x = x + spacing; 
       }
   }

}


function windows() {
  
  rectMode(CENTER);

  strokeWeight(fxrand() * 2 + 0.25);
  stroke(0, 200);

  fill(col4);
  rect(x, 0, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 0, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);
  
  fill(col1);
  rect(x, 50, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 50, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);

  fill(col1);
  rect(x, 100, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 100, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);
  
  fill(col1);
  rect(x, 150, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 150, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);
  
  fill(col2);
  rect(x, 200, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 200, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);
  
  fill(col2);
  rect(x, 250, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 250, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);
  
  fill(col2);
  rect(x, 300, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 300, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);
  
  fill(col3);
  rect(x, 350, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 350, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);

  fill(col4);
  rect(x, 400, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 400, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);

  fill(col3);
  rect(x, 450, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 450, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);

  fill(col2);
  rect(x, 500, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 500, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);

  fill(col2);
  rect(x, 550, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 550, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);

  fill(col2);
  rect(x, 600, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 600, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);

  fill(col1);
  rect(x, 650, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 650, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);

  fill(col1);
  rect(x, 700, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 700, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);

  fill(col1);
  rect(x, 750, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 750, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);

  fill(col4);
  rect(x, 800, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.9);
  scribble.scribbleRect(x, 800, blockWidth / spacingArrayIndex + 32 * fxrand(), blockHeight * 0.3);


   if (x < width + 100) {
      x = x + spacing * spacingArrayIndex / 3; 
   }
}

function bioSigns() {

  strokeWeight(1);
  rectMode(CENTER);  
    
  stroke(0);
  fill(col2);
  scribble.scribbleRect(x, 250, fxrand() * 40, blockHeight * 2 / Math.ceil(fxrand() * 3) + 2);
  fill(col3);
  rect(x, 250, fxrand() * 40, blockHeight * 2 / Math.ceil(fxrand() * 3) + 2);

  if (fxrand() > 0.1) {
    stroke(0);
    fill(col4);
    scribble.scribbleEllipse(x, 100, 5 * spacingArrayIndex, blockHeight * 2 / Math.ceil(fxrand() * 3) + 2);  
  }

  if (fxrand() > 0.5) {
    stroke(0);
    fill(col1);
    scribble.scribbleEllipse(x, 100, 5 * spacingArrayIndex, blockHeight * 2 / Math.ceil(fxrand() * 3) + 2);  
  }

  
  stroke(0);
  fill(col1);
  scribble.scribbleEllipse(x, 400, fxrand() * 40, blockHeight * 2 / Math.ceil(fxrand() * 16) + 2);

  stroke(0);
  fill(col4);
  scribble.scribbleEllipse(x, 400, fxrand() * 40, blockHeight * 2 / Math.ceil(fxrand() * 16) + 2);


  stroke(0);
  fill(col2);
  scribble.scribbleRect(x, 550, fxrand() * 40, blockHeight * 2 / Math.ceil(fxrand() * 3) + 2);
  fill(col3);
  rect(x, 550, fxrand() * 40, blockHeight * 2 / Math.ceil(fxrand() * 3) + 2);

  if (fxrand() > 0.1) {
    stroke(0);
    fill(col4);
    scribble.scribbleEllipse(x, 700, 5 * spacingArrayIndex, blockHeight * 2 / Math.ceil(fxrand() * 3) + 2);  
  }

  if (fxrand() > 0.5) {
    stroke(0);
    fill(col1);
    scribble.scribbleEllipse(x, 700, 5 * spacingArrayIndex, blockHeight * 2 / Math.ceil(fxrand() * 3) + 2);  
  }
  
    
   if (x < width + 100) {
      x = x + spacing * spacingArrayIndex / 2; 
   }
}


function gridRunner() {
       
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);  

       if (fxrand() > 0.5) {
        fill(col1);
        rect(x, 0, blockWidth / 12, blockHeight * Math.ceil(fxrand() * 10) + 1); 
       }

       if (fxrand() > 0.3) {
        fill(col2);
        rect(x, 0, blockWidth / 12, blockHeight * Math.ceil(fxrand() * 8) + 1); 
       }

       if (fxrand() > 0.5) {
        fill(col3);
        rect(x, 0, blockWidth / 12, blockHeight * Math.ceil(fxrand() * 6) + 1); 
       }

       if (fxrand() > 0.3) {
        fill(col4);
        rect(x, 0, blockWidth / 12, blockHeight * Math.ceil(fxrand() * 4) + 1); 
       }

       fill(col1);
       if (fxrand() > 0.5) {
         rect(x, 800, blockWidth / 12, blockHeight * Math.ceil(fxrand() * 10) + 1);
       }

       fill(col2);
       if (fxrand() > 0.3) {
         rect(x, 800, blockWidth / 12, blockHeight * Math.ceil(fxrand() * 8) + 1);
       }

       if (fxrand() > 0.5) {
        fill(col3);
        rect(x, 800, blockWidth / 12, blockHeight * Math.ceil(fxrand() * 6) + 1); 
       }

       if (fxrand() > 0.3) {
        fill(col4);
        rect(x, 800, blockWidth / 12, blockHeight * Math.ceil(fxrand() * 4) + 1); 
       }

       
       strokeWeight(1);
       stroke(0);
       scribble.scribbleEllipse(x, 400, 25 * spacingArrayIndex, Math.ceil(fxrand() * 25 * spacingArrayIndex) + 1);
       
       if (fxrand() > 0.7) {
         
         scribble.scribbleEllipse(x, 400, 25 * spacingArrayIndex, Math.ceil(fxrand() * 25 * spacingArrayIndex) + 1);
       }
       
      scribble.scribbleEllipse(x, 300, 8 * spacingArrayIndex, Math.ceil(fxrand() * 10 * spacingArrayIndex) + 1);
       
       if (fxrand() > 0.7) {
         
         scribble.scribbleEllipse(x, 300, 8 * spacingArrayIndex, Math.ceil(fxrand() * 10 * spacingArrayIndex) + 1);
       }

      scribble.scribbleEllipse(x, 500, 8 * spacingArrayIndex, Math.ceil(fxrand() * 10 * spacingArrayIndex) + 1);
       
       if (fxrand() > 0.7) {
         
         scribble.scribbleEllipse(x, 500, 8 * spacingArrayIndex, Math.ceil(fxrand() * 10 * spacingArrayIndex) + 1);
       }
 

       if (x < width + 100) {
          x = x + spacing; 
       }
}



function decoderKey() {

strokeWeight(1);

fill(col1);
rect(x, 200, 4 * spacingArrayIndex, 2 * Math.ceil(fxrand() * 96));

fill(col2);
rect(x, 200, 4 * spacingArrayIndex, 2 * Math.ceil(fxrand() * 32));

fill(col3);
rect(x, 600, 4 * spacingArrayIndex, 2 * Math.ceil(fxrand() * 96));

fill(col4);
rect(x, 600, 4 * spacingArrayIndex, 2 * Math.ceil(fxrand() * 32));

stroke(col4);
if (fxrand() > 0.1) {
  scribble.scribbleRect(x, 400, 2 * spacingArrayIndex, 4 * Math.ceil(fxrand() * 32));
}

stroke(col4);
noFill();
scribble.scribbleEllipse(x, 0, 32 * spacingArrayIndex, 4 * Math.ceil(fxrand() * 32));
scribble.scribbleEllipse(x, 800, 32 * spacingArrayIndex, 4 * Math.ceil(fxrand() * 32));

  if (x < width + 220) {
    x = x + spacing * spacingArrayIndex / 4; 
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

    noStroke();
    
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
    x = x + spacing * spacingArrayIndex / 4; 
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
    x = x + spacing * spacingArrayIndex / 2;
  }

}

function vines() {

   if (y < width + 320) {
 
      strokeWeight(fxrand() * 2 + 1);
      noFill();

      fill(col1);
      stroke(0);
      scribble.scribbleEllipse(150, y, 144 * fxrand() * 0.5 + 1, 24 * spacingArrayIndex);
   
      fill(col2);
      stroke(0);
      scribble.scribbleEllipse(150, y, 96 * fxrand() * 2 + 1, 16 * spacingArrayIndex);
   
      fill(col3);
      stroke(0);
      scribble.scribbleEllipse(150, y, 32 * fxrand() * 3 + 1, 12 * spacingArrayIndex);

      fill(col3);
      stroke(0);
      scribble.scribbleEllipse(400, y, 144 * fxrand() * 0.5 + 1, 24 * spacingArrayIndex);
   
      fill(col1);
      stroke(0);
      scribble.scribbleEllipse(400, y, 96 * fxrand() * 2 + 1, 16 * spacingArrayIndex);
   
      fill(col2);
      stroke(0);
      scribble.scribbleEllipse(400, y, 32 * fxrand() * 3 + 1, 12 * spacingArrayIndex);

      fill(col2);
      stroke(0);
      scribble.scribbleEllipse(650, y, 144 * fxrand() * 0.5 + 1, 24 * spacingArrayIndex);
   
      fill(col4);
      stroke(0);
      scribble.scribbleEllipse(650, y, 96 * fxrand() * 2 + 1, 16 * spacingArrayIndex);
   
      fill(col1);
      stroke(0);
      scribble.scribbleEllipse(650, y, 32 * fxrand() * 3 + 1, 12 * spacingArrayIndex);
      y = y + spacing * spacingArrayIndex / 2; 

   } else {

    strokeWeight(fxrand() * 2 + 1);
    noFill();

    factorX = 8 * spacingArrayIndex;
    factorY = 16 * fxrand() * 3 + 1;
 
    fill(col4);
    stroke(0);
    scribble.scribbleEllipse(x, 0, factorX + factorY * 2, factorY + factorX * 2);
 
    fill(col3);
    stroke(0);
    scribble.scribbleEllipse(x, 0, factorX + factorY * 1.5, factorY + factorX * 1.5);
 
    fill(col1);
    stroke(0);
    scribble.scribbleEllipse(x, 0, factorX + factorY, factorY + factorX);
 
    fill(col4);
    stroke(0);
    scribble.scribbleEllipse(x, 800, factorX + factorY * 2, factorY + factorX * 2);
 
    fill(col3);
    stroke(0);
    scribble.scribbleEllipse(x, 800, factorX + factorY * 1.5, factorY + factorX * 1.5);
 
    fill(col1);
    stroke(0);
    scribble.scribbleEllipse(x, 800, factorX + factorY, factorY + factorX);
 

     x = x + spacing * spacingArrayIndex / 2; 
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
  scribble.scribbleRect(x, 0, blockWidth / spacingArrayIndex * fxrand() * 6, blockHeight * fxrand() * 1 + 2);
  stroke(col2);
  scribble.scribbleRect(x, 100, blockWidth / spacingArrayIndex * fxrand() * 6, blockHeight * Math.floor(fxrand() * 1 + 1));
  stroke(col3);
  scribble.scribbleRect(x, 200, blockWidth / spacingArrayIndex * fxrand() * 6, blockHeight * Math.ceil(fxrand() * 1 + 1));
  if (fxrand() > 0.1) {
    stroke(0);
    fill(col4);
    scribble.scribbleEllipse(x, 400, 32, 32 * fxrand() * 2 + 1);
  }
  stroke(col3);
  scribble.scribbleRect(x, 300, blockWidth / spacingArrayIndex * fxrand() * 6, blockHeight * fxrand() * 0.5 + 2);
  stroke(col1);
  scribble.scribbleRect(x, 500, blockWidth / spacingArrayIndex * fxrand() * 6, blockHeight * Math.floor(fxrand() * 1 + 1));
  stroke(col2);
  scribble.scribbleRect(x, 600, blockWidth / spacingArrayIndex * fxrand() * 6, blockHeight * Math.floor(fxrand() * 1 + 1));
  stroke(col3);
  scribble.scribbleRect(x, 700, blockWidth / spacingArrayIndex * fxrand() * 6, blockHeight * Math.ceil(fxrand() * 1 + 1));
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
          x = x + spacing * 0.5 * spacingArrayIndex; 
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
          x = x + spacing * spacingArrayIndex / 8; 
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
          x = x + spacing * spacingArrayIndex * 0.25; 
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
          x = x + spacing * spacingArrayIndex * 0.2; 
       }
       
} 
