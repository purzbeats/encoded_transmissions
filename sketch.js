var blockWidth = fxrand() * 35 + 5;
var blockHeight = fxrand() * 35 + 5;

let data;
let index = 0;

var speedX = fxrand();
var speedY = fxrand();

var speedMult = 15;
var speedFloor = 2;

var speedMult1 = fxrand() * speedMult + speedFloor;
var speedMult2 = fxrand() * speedMult + speedFloor;
var speedMult3 = fxrand() * speedMult + speedFloor;
var speedMult4 = fxrand() * speedMult + speedFloor;
var speedMult5 = fxrand() * speedMult + speedFloor;
var speedMult6 = fxrand() * speedMult + speedFloor;
var speedMult7 = fxrand() * speedMult + speedFloor;
var speedMult8 = fxrand() * speedMult + speedFloor;
var speedMult9 = fxrand() * speedMult + speedFloor;
var speedMult10 = fxrand() * speedMult + speedFloor;
var speedMult11 = fxrand() * speedMult + speedFloor;
var speedMult12 = fxrand() * speedMult + speedFloor;
var speedMult13 = fxrand() * speedMult + speedFloor;
var speedMult14 = fxrand() * speedMult + speedFloor;
var speedMult15 = fxrand() * speedMult + speedFloor;
var speedMult16 = fxrand() * speedMult + speedFloor;

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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  
  choices();
  let c = color(bg);
  background(c);

  // drawText();
  console.log(fxhash); 
  console.log(col1, col2, col3, col4, bg, paletteName);
}

function drawText() {
      fill(0);
      rect(10, windowHeight - 100, 790, 90);
      textFont('Courier');
      textSize(25);
      fill(255);
      text(fxhash, 20, windowHeight - 50, windowWidth, windowHeight);
      text("Palette: " + paletteName, 20, windowHeight - 85, windowWidth, windowHeight);
}

function draw() {

      for (let z = 0; z < 1; z++) {
       let c = color(col1);
       fill(c);
       stroke(0);
       strokeWeight(1);
       rect((z + frameCount * speedX * speedMult1) % width, (z + frameCount * speedY * speedMult4) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult2) % width, (z + frameCount * speedY * speedMult3) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult3) % width, (z + frameCount * speedY * speedMult2) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult4) % width, (z + frameCount * speedY * speedMult1) % height, blockWidth, blockHeight);
      } 

      for (let z = 0; z < 1; z++) {
       let c = color(col2);
       fill(c);
       stroke(0);
       strokeWeight(1);
       rect((z + frameCount * speedX * speedMult5) % width, (z + frameCount * speedY * speedMult8) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult6) % width, (z + frameCount * speedY * speedMult7) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult7) % width, (z + frameCount * speedY * speedMult6) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult8) % width, (z + frameCount * speedY * speedMult5) % height, blockWidth, blockHeight);
      }

      for (let z = 0; z < 1; z++) {
       let c = color(col3);
       fill(c);
       stroke(0);
       strokeWeight(1);
       rect((z + frameCount * speedX * speedMult9) % width, (z + frameCount * speedY * speedMult12) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult10) % width, (z + frameCount * speedY * speedMult11) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult11) % width, (z + frameCount * speedY * speedMult10) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult12) % width, (z + frameCount * speedY * speedMult9) % height, blockWidth, blockHeight);
      } 

       for (let z = 0; z < 1; z++) {
       let c = color(col4);
       fill(c);
       stroke(0);
       strokeWeight(1);
       rect((z + frameCount * speedX * speedMult13) % width, (z + frameCount * speedY * speedMult16) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult14) % width, (z + frameCount * speedY * speedMult15) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult15) % width, (z + frameCount * speedY * speedMult14) % height, blockWidth, blockHeight);
       rect((z + frameCount * speedX * speedMult16) % width, (z + frameCount * speedY * speedMult13) % height, blockWidth, blockHeight);
      } 


}

