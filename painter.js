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

function getRect17() {
       stroke(0);
       strokeWeight(1);
       rectMode(CENTER);       
       
       fill(col1);
       rect(x, 0, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col2);
       rect(x, 50, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col3);
       rect(x, 100, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       fill(col4);
       rect(x, 150, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col3);
       rect(x, 200, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       fill(col2);
       rect(x, 250, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col1);
       rect(x, 300, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       fill(col2);
       rect(x, 350, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col3);
       rect(x, 400, blockWidth / 8, blockHeight * fxrand() * 0.3 + 1);
       fill(col3);
       rect(x, 450, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col4);
       rect(x, 500, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col3);
       rect(x, 550, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       fill(col2);
       rect(x, 600, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col1);
       rect(x, 650, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       fill(col2);
       rect(x, 700, blockWidth / 8, blockHeight * fxrand() * 2 + 1);
       fill(col3);
       rect(x, 750, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       fill(col4);
       rect(x, 800, blockWidth / 8, blockHeight * fxrand() * 1 + 1);
       
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
       
       fill(col1);
       rect(x, 200, blockWidth / 8, blockHeight * fxrand() + 4); 
       fill(col2);
       rect(x, 300, blockWidth / 4, blockHeight * fxrand() + 2); 
       fill(col3);
       rect(x, 400, blockWidth / 8, blockHeight * fxrand() + 24); 
       fill(col4);
       rect(x, 500, blockWidth / 16, blockHeight * fxrand() + 2); 
       fill(col1);
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
