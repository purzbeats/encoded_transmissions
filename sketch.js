// Description: Call `enterLayer()` with two different keys, in order to create
// two Graphics that are drawn side by side.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  beginLayer('left', width, height);
  
  for (let y = 0; y < height; y++) {
    stroke((y + frameCount) % height, width, height);
    line(0, y, width, height - y)
  }
  

  endLayer();

  beginLayer('right', width, height);  

  
  let s = 'Test typing stuff in a box in a box in a box.';
  rect(10, 10, 80, 90);
  text(s, 15, 15, 70, 80); // Text wraps within text box

  
  endLayer();
}