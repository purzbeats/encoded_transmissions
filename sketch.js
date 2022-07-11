
// Define global variables and choices, set up arrays, send FXHash features data out
let x = 0;
let y = 0;
let spacing;
let speed;

let stateOfArray = ["Absolute Chaos", "Modern DAW", "Demo Tape", "Four Track", "Quantized", "Jazz", "Zoom Out", "Sketch Box", "Anxiety In The City", "Algo", "Bitrot", "Cloudy Day"];

var cnv;

var blockWidth = 96;
var blockHeight = 48;

var drawSpeed = 1;

var scribble = new Scribble();  

let data;
let index = 0;


function preload() {
  data = loadJSON("palettes.json");
}

let availablePalettes = ["Tequila Sunrise", "Lilac Field", "Red Wine", "Periwinkle", "Rainforest", "Cotton Candy", "Easter Basket", "Blue Munsell", "Lush Growth", "English Violet", "Irrestible", "Lemon Chiffon", "Ice Cream Shop", "Thistle", "Sea Glass", "Mardi Gras", "Spring Forward", "Autumn Leaves", "Lava Flow", "Opal", "Picnic", "Concrete Towers", "Sienna", "Boardwalk", "Nuclear Burn", "Banana Hammock", "Lapis Lazuli", "French Raspberry", "Cold Stone", "Pumpkin Soup", "Glossy", "Firewatch", "Jam Jar", "Green Tea", "Campfire", "Inferno", "Horizon Breakout", "Beach Pastel", "Fuji", "Night Drive", "Lake House", "Space Cadet", "Bitter Lime", "Retro Love", "Cafe Au Lait", "Caput Mortuum", "Lime Rickey", "Astronaut Ice Cream", "Vaporwave", "Raw Umber", "Monochrome", "Monochrome Inverted"];

paletteIndex = parseInt(fxrand() * 52);
stateOfArrayIndex = parseInt(fxrand() * 12);

const config = {
   "Palette Name" : availablePalettes[paletteIndex],
   "State Of Array" : stateOfArray[stateOfArrayIndex],
};

window.$fxhashFeatures = {
  ...config,
};
//////


// Define all the local choices
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


function printInfo() {
  print("FXHash Seed:", fxhash);
  print("State Of Array:", stateOfArray[stateOfArrayIndex]);
  print("Palette Name:", paletteIndex, paletteName);
  print("Palette Hex:", bg, col1, col2, col3, col4);
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

  printInfo();

}


// Press 's' to save PNG
function keyTyped() {
  if (key === 's') {
          save();
      }
}

function draw() {

      // Paint for 500 frames, do stuff after.
      if (frameCount < 500) {     
        painter();
      } else if (frameCount > 500) {
        // stroke(0);
        // strokeWeight(5);
        // rect(700, 700, 125, 125);
        // stroke(col4);
        // strokeWeight(5);
        // fill(bg);
        // rect(700, 700, 120, 120);
        // strokeWeight(4);
        // stroke(col3);
        // scribble.scribbleRect(700, 700, 90, 90);    
        // stroke(col2);
        // scribble.scribbleRect(700, 700, 60, 60);    
        // stroke(col1);
        // scribble.scribbleRect(700, 700, 30, 30);    
      }


      // Border
      rectMode(CENTER);
      noFill();
      stroke(col2);
      strokeWeight(10);
      rect(400, 400, width - 10, height - 10);
      stroke(0);
      strokeWeight(4);
      rect(400, 400, width - 4, height - 4);
      
      // Stop drawing everything after 600 frames
      if (frameCount > 600) {
        noLoop();
      }

}

