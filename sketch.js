let x = 0;
let y = 0;
let spacing;
let speed;

var cnv;

var blockWidth = 96;
var blockHeight = 64;

var drawSpeed = 1;

var scribble = new Scribble();  

let data;
let index = 0;


function preload() {
  data = loadJSON("palettes.json");
}

let availablePalettes = ["Tequila Sunrise", "Lilac Field", "Red Wine", "Periwinkle", "Rainforest", "Cotton Candy", "Easter Basket", "Blue Munsell", "Lush Growth", "English Violet", "Irrestible", "Lemon Chiffon", "Ice Cream Shop", "Thistle", "Sea Glass", "Mardi Gras", "Spring Forward", "Autumn Leaves", "Lava Flow", "Opal", "Picnic", "Concrete Towers", "Sienna", "Boardwalk", "Nuclear Burn", "Banana Hammock", "Lapis Lazuli", "French Raspberry", "Cold Stone", "Pumpkin Soup", "Glossy", "Firewatch", "Jam Jar", "Green Tea", "Campfire", "Inferno", "Horizon Breakout", "Beach Pastel", "Fuji", "Night Drive", "Lake House", "Space Cadet", "Bitter Lime", "Retro Love", "Cafe Au Lait", "Caput Mortuum", "Lime Rickey", "Astronaut Ice Cream", "Vaporwave", "Raw Umber", "Monochrome", "Monochrome Inverted"];

paletteIndex = parseInt(fxrand() * 52);
stateOfArrayIndex = parseInt(fxrand() * 5);

const config = {
   "Palette Name" : availablePalettes[paletteIndex],
};

window.$fxhashFeatures = {
  ...config,
};
//////

function choices() {

  index = paletteIndex;
  
  let palette = data.palettes[index];
       
  bg = palette[0];
  col1 = palette[1];
  col2 = palette[2];
  col3 = palette[3];
  col4 = palette[4];
  paletteName = str(palette[5]);

  speedMult = 1;
  speedFloor = 1;

  spacing = Math.floor(fxrand() * 4 + 2);
  speed = 3;

  speedX = 1;
  speedY = 1;

  blockSizeMult1 = fxrand() * 64 + 24;
  blockSizeMult2 = fxrand() * 64 + 24;
  blockSizeMult3 = fxrand() * 64 + 24;
  blockSizeMult4 = fxrand() * 64 + 24;  

  speedMult1 = fxrand() * speedMult + speedFloor;
  speedMult2 = fxrand() * speedMult + speedFloor;
  speedMult3 = fxrand() * speedMult + speedFloor;
  speedMult4 = fxrand() * speedMult + speedFloor;
  speedMult5 = fxrand() * speedMult + speedFloor;
  speedMult6 = fxrand() * speedMult + speedFloor;
  speedMult7 = fxrand() * speedMult + speedFloor;
  speedMult8 = fxrand() * speedMult + speedFloor;
  speedMult9 = fxrand() * speedMult + speedFloor;
  speedMult10 = fxrand() * speedMult + speedFloor;
  speedMult11 = fxrand() * speedMult + speedFloor;
  speedMult12 = fxrand() * speedMult + speedFloor;
  speedMult13 = fxrand() * speedMult + speedFloor;
  speedMult14 = fxrand() * speedMult + speedFloor;
  speedMult15 = fxrand() * speedMult + speedFloor;
  speedMult16 = fxrand() * speedMult + speedFloor;

}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}


function windowResized() {
  centerCanvas();
}

function setup() {
 
  cnv = createCanvas(800, 800);
  centerCanvas();

  pixelDensity(2);

  choices();
  let c = color(bg);
  background(c);

  // drawText();
  console.log(fxhash); 
  console.log(col1, col2, col3, col4, bg, paletteName);
}

function drawText() {
      fill(0);
      rect(0, height - 150, 800, 150);
      textFont('Courier');
      textSize(25);
      fill(255);
      text(fxhash, 20, height - 50, width, height);
      text("Palette: " + paletteName, 20, height - 85, width, height);
      text("Frame: " + frameCount, 20, height - 120, width, height);
}

function getScribbleRect() {

      blockMult = 1;

      for (let z = 0; z < 1; z++) {
       stroke(col1);
       strokeWeight(fxrand() * 3);
       scribble.scribbleRect((z + frameCount * speedX * speedMult1) % width, (z + frameCount * speedY * speedMult4) % height, blockWidth, blockHeight);

       stroke(col2);
       strokeWeight(fxrand() * 3);
       scribble.scribbleRect((z + frameCount * speedX * speedMult2) % width, (z + frameCount * speedY * speedMult3) % height, blockWidth, blockHeight);

       stroke(col3);
       strokeWeight(fxrand() * 3);
       scribble.scribbleRect((z + frameCount * speedX * speedMult3) % width, (z + frameCount * speedY * speedMult2) % height, blockWidth, blockHeight);

       stroke(col4);
       strokeWeight(fxrand() * 3);
       scribble.scribbleRect((z + frameCount * speedX * speedMult4) % width, (z + frameCount * speedY * speedMult1) % height, blockWidth, blockHeight);
      } 

}

function getRect() {
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




function draw() {




      getRect();
      
      // getScribbleRect();
      // speedMult = speedMult + 1000;

}

