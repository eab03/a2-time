// Second assignment for Creative Explorations on the Web
// Part C: Abstract Clock

/*
/  For the abstract clock, my design was initially inspired by paintings of mandalas
/  at the yoga studio I go to. To illustrate the subtle passing of time, my intention
/  was to incorporate various elements in the sketch that either move or change color
/  (or both) each second, minute or hour. These include the petals on the flowers, some of
/  which both move and change color, and the concentric circles and outer square
/  which only change color (as noted in the comments below).
*/

/*
/  A note about the code for the flowers:
/  This part of my code is primarily directly based upon that of the rose math
/  algorithm -- provided as a class example and about which more information can be
/  found here: https://en.wikipedia.org/wiki/Rose_(mathematics). My decision to
/  utilize this code as extensively was solely for aesthetic purposes.
*/

// CREATE VARIABLES
// based on the class example, these are modified values for the math rose constants,
// nominator and denominator
let r;
let n;
let d = 8;

// rgb values for the blue background (outer square)
let r1, g1, b1;
let r2, g2, b2;

// center circles
let ellipse1;
let ellipse2;
let ellipse3;

function setup() {
    let canvas = createCanvas(700, 700);
    canvas.parent('mycontainer');
    stroke(1);
} // close function setup

function draw() {
    let s = second();
    let m = minute();
    let h = hour();

    // map color values to the second, minute, or hour
    let sColor = map(s, 0, 59, 255, 125);
    let mColor = map(m, 0, 59, 124, 75);
    let hColor = map(h, 0, 23, 74, 0);

    // move origin of the canvas to the center
    translate(width / 2, height / 2);
    strokeWeight(1);

    // DRAW BACKGROUND
    backgroundDraw();

    // DRAW MANDALA DESIGN
    // inner squares
    fill(mColor); // minute color
    rect(-275, -275, 550, 550); // changes color each minute

    fill(hColor); // hour color
    rect(-212.5, -212.5, 425, 425); // changes color each hour

    flowerOne(); // outer flower, changes color each minute

    // middle circles
    ellipse1 = new Ellipse(0, 0, 275, hColor); // changes color each hour
    ellipse1.display();

    ellipse2 = new Ellipse(0, 0, 250, mColor); // changes color each minute
    ellipse2.display();

    ellipse3 = new Ellipse(0, 0, 225, sColor); // changes color each second
    ellipse3.display();

    // center flowers
    flowerTwo(); // rotates and changes color each hour
    flowerThree(); // rotates clockwise and changes color each minute
    flowerFour(); // rotates clockwise each second

} // close function draw

function backgroundDraw() {
    let h = hour();
    let m = minute();
    let s = second();

    // map background (outer blue square) color to the second
    // midnight blue: rgb(25, 25, 112)
    // from zero to twenty-nine seconds color fades in
    r1 = map(s, 0, 59, 152, 26);
    g1 = map(s, 0, 59, 152, 26);
    b1 = map(s, 0, 59, 226, 113);

    r2 = map(s, 0, 59, 25, 151);
    g2 = map(s, 0, 59, 25, 151);
    b2 = map(s, 0, 59, 112, 225);

    let fadein = color(r1, g1, b1);
    let fadeout = color(r2, g2, b2);

    // change the background color based on the second to create a cyclical pattern of
    // the color being the lightest at zero seconds, and darkest at 30 seconds
    // reverse the pattern at second 31
    if ((s >= 0) & (s <= 29)) {
        background(fadein);
    } else if ((s >= 30) & (s <= 59)) {
        background(fadeout);
    }

    // at exactly midnight, noon and every three hours in between
    // change the stroke color to gold
    if ((h == 0) & (m == 0) || (h % 3 == 0) & (m == 0)) {
        stroke(255, 215, 0); // gold
    } else {
        stroke(250, 128, 114); // salmon
    }

} // close backgroundDraw function

// CREATE THE ELLIPSE OBJECT
function Ellipse(tempX, tempY, tempD, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempD;
    this.color = tempColor;

    this.display = function() {
        ellipse(this.x, this.y, this.diameter, this.diameter, fill(this.color));
    };
} // close Ellipse function

// CREATE FUNCTIONS FOR EACH FLOWER, STARTING WITH THE OUTERMOST FLOWER
// outermost flower: color changes each minute
function flowerOne() {
    let m = minute();
    let mColor = map(m, 0, 59, 126, 50);
    let n = 14;

    beginShape();
    for (var a = 0; a < TWO_PI * d; a += 0.03) {
        fill(mColor);
        let r = 160 * cos(n / d * a);
        let x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
} // close flowerOne function

// outer middle flower: color changes and rotates each hour
function flowerTwo() {
    let h = hour();
    let hColor = map(h, 0, 23, 49, 0);
    let n = h;

    beginShape();
    for (var a = 0; a < TWO_PI * d; a += 0.03) {
        fill(hColor);
        var r = 100 * cos(n + 18 / d * a);
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
} // close flowerTwo function

// middle inner flower: color changes and rotates each minute
function flowerThree() {
    let m = minute();
    let mColor = map(m, 0, 59, 126, 50);
    let n = m;

    beginShape();
    for (var a = 0; a < TWO_PI * d; a += 0.03) {
        fill(mColor);
        var r = 60 * cos(n + 12 / d * a);
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
} // close flowerThree function

// innermost flower: rotates clockwise every second
function flowerFour() {
    let s = second();
    let n = s;

    beginShape();
    for (var a = 0; a < TWO_PI * d; a += 0.03) {
        fill(0);
        var r = 20 * cos(n - 22 / d * a);
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
} // close flowerFour function
