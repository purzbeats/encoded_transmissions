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
  }
}

function sketchCircles() {

  strokeWeight(1);
  rectMode(CENTER);  
  noFill();

  stroke(col1);
  scribble.scribbleEllipse(x, 0, blockWidth / 16, blockHeight * Math.floor(fxrand() * 2 + 2));

  if (fxrand() > 0.9) {
    stroke(col2);
    scribble.scribbleEllipse(x, 200, blockWidth / 2, blockHeight * Math.floor(fxrand() * 4 + 2));
  }

  if (fxrand() > 0.5) {
    stroke(col3);
    scribble.scribbleRect(x, 400, blockWidth / 4, blockHeight * Math.floor(fxrand() * 10 + 2));
  }

  if (fxrand() > 0.9) {
    stroke(col4);
    scribble.scribbleRect(x, 400, blockWidth / 4, blockHeight * Math.floor(fxrand() * 8 + 2));
  }

  if (fxrand() > 0.9) {
    stroke(col2);
    scribble.scribbleEllipse(x, 600, blockWidth / 2, blockHeight * Math.floor(fxrand() * 4 + 2));
  }

  stroke(col1);
  scribble.scribbleEllipse(x, 800, blockWidth / 16, blockHeight * Math.floor(fxrand() * 2 + 2));

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
  stroke(col2);
  scribble.scribbleRect(x, 800, blockWidth / 4, blockHeight * Math.floor(fxrand() * 2 + 2));
  stroke(col4);
  scribble.scribbleRect(x, 400, blockWidth / 4, blockHeight * Math.floor(fxrand() * 10 + 2));
  stroke(col3);
  scribble.scribbleRect(x, 100, blockWidth / 4, blockHeight * fxrand() * 0.5 + 2);
  stroke(col3);
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
