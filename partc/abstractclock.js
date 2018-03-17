/* based on rose math algorithm- please read if interested at:
/  https://en.wikipedia.org/wiki/Rose_(mathematics)
/  Rose curves defined by
/  r=cos(k)*theta, for various values of petals k=n/d.
*/

// CREATE VARIABLES
// math rose constants, nominator and denominator
let r; // original code 7
let n = 14;
let d = 8;

// rgb values for the background
let r1, g1, b1;
let r2, g2, b2;

// center ellipses
let ellipse1;
let ellipse2;
let ellipse3;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.position(15, 275);
    canvas.parent('container');
  stroke(1);
}

function draw() {
  let h = hour();
  let m = minute();
  let s = second();

  // map values of petal and ellipse colors to the second, minute, or hour
  let sColor = map(s, 0, 59, 255, 125);
  let mColor = map(m, 0, 59, 124, 50);
  let hColor = map(h, 0, 23, 49, 0);

  translate(width / 2, height / 2);
  strokeWeight(1);

  // DRAW BACKGROUND
  // change stroke and background color at midnight and noon
  // change background color based on the second
  backgroundDraw();

  // DRAW MANDALA DESIGN

  fill(mColor);
  rect(-275, -275, 550, 550); // changes color each minute

  fill(hColor);
  rect(-212.5, -212.5, 425, 425); // changes color each hour

  ellipse1 = new Ellipse(0, 0, 275, hColor); // changes color each hour
  ellipse1.display();

  flowerOne(); // outer flower, changes color each minute

  ellipse1 = new Ellipse(0, 0, 275, hColor); // changes color each hour
  ellipse1.display();

  ellipse2 = new Ellipse(0, 0, 250, mColor); // changes color each minute
  ellipse2.display();

  ellipse3 = new Ellipse(0, 0, 225, sColor); // changes color each second
  ellipse3.display();

  flowerTwo(); // rotates and changes color on the hour
  flowerThree(); // rotates and changes color on the minute
  flowerFour(); // rotates each second
}

function backgroundDraw() {
  let h = hour();
  let m = minute();
  let s = second();

  // map background color to the second
  r1 = map(s, 0, 59, 25, 153);
  g1 = map(s, 0, 59, 25, 153);
  b1 = map(s, 0, 59, 112, 227);

  r2 = map(s, 0, 59, 153, 25);
  g2 = map(s, 0, 59, 153, 25);
  b2 = map(s, 0, 59, 227, 112);

  if ((h == 0) & (m == 1) || (h == 12) & (m == 1)) {
    stroke(255, 215, 0);
    background(255, 215, 0);
  } else {
    stroke(250, 128, 114);
  }

  //change background color based on the second
  if ((s >= 0) & (s < 29)) {
    background(r2, g2, b2, 100);
  } else if ((s >= 30) & (s < 59)) {
    background(r1, g1, b1);
  }
}

// CREATE THE ELLIPSE OBJECT
function Ellipse(tempX, tempY, tempD, tempColor) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempD;
  this.color = tempColor;

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter, fill(this.color));
  };
}

// CREATE FUNCTIONS FOR EACH FLOWER
function flowerOne() {
  let m = minute();
  let mColor = map(m, 0, 59, 126, 50);

  beginShape();
  for (var a = 0; a < TWO_PI * d; a += 0.03) {
    fill(mColor);
    var r = 160 * cos(n / d * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function flowerTwo() {
  let h = hour();
  let hColor = map(h, 0, 23, 49, 0);

  beginShape();
  for (var a = 0; a < TWO_PI * d; a += 0.03) {
    fill(hColor);
    var r = 100 * cos(h + 18 / d * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function flowerThree() {
  let m = minute();
  let mColor = map(m, 0, 59, 126, 50);

  beginShape();
  for (var a = 0; a < TWO_PI * d; a += 0.03) {
    fill(mColor);
    var r = 60 * cos(m + 12 / d * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function flowerFour() {
  let s = second();
  let sColor = map(s, 0, 59, 255, 125);

  beginShape();
  for (var a = 0; a < TWO_PI * d; a += 0.03) {
    fill(0);
    var r = 20 * cos(s - 22 / d * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  // let S = second();
  let m = minute();
  let h = hour();

  // let sColor = map(S, 0, 59, 255, 125);
  let mColor = map(m, 0, 59, 126, 50);
  let hColor = map(h, 0, 23, 49, 0);

  text(s, 9, 180);
  text(m, 9, 230);
  text(h, 9, 280);

  let r1 = map(s, 0, 59, 25, 153);
  let g1 = map(s, 0, 59, 25, 153);
  let b1 = map(s, 0, 59, 112, 227);

  let r2 = map(s, 0, 59, 153, 25);
  let g2 = map(s, 0, 59, 153, 25);
  let b2 = map(s, 0, 59, 227, 112);

  text(sColor, 9, 200);
  text(mColor, 9, 250);
  text(hColor, 9, 300);

  text(r1, 9, 220);
  text(g1, 9, 270);
  text(b1, 9, 290);
}
