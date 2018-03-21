// Second assignment for Creative Explorations on the Web
// Part A: Tally-Ho!

// Based on code from class example in section

// REDO COMMENTS!!!


// define variables
let mouseClicks = 0;
let loopCount = 0;

function setup() {
    let canvas = createCanvas(700, 700);
    canvas.parent('mycontainer');
    background(0);

    noStroke();
    fill(80);
    rect(0, 0, 700, 75);
    fill("salmon");
    rect(0, 675, 700, 25);

    let s = "Click the MOUSE to begin!  Press any KEY to start over!"
    strokeWeight(0);
    fill(255);
    textSize(23);
    text(s, 60, 50);
} // close setup function

function draw() {}

// MOUSE CLICK EVENT HANDLER
function mousePressed() {

    /// reset loop count to zero before beginning loop
    loopCount = 0;

    // increment total count of mouse clicks
    mouseClicks++;

    // create series of nested loops
    // starting at x,y position 50,100 draw a series of grids on the canvas
    // grid cell width is xOffset and grid cell height is yOffset

    let xOffset = 170;
    let yOffset = 150;
    let objOffset = 20;

    for (var y = 125; y <= height; y += yOffset) {
        for (var x = 50; x <= width; x += xOffset) {
            // starting in this first cell at x,y position 50,100
            // draw a series of four tally marks with a width of 20 (objOffset)
            // until reach edge of cell grid (xOffset)

            for (let i = 20; i < 100; i = i + objOffset) {
                if (loopCount < mouseClicks) {
                    console.log("line:" + loopCount + " - clicks: " + mouseClicks);
                    stroke(255);
                    strokeWeight(4);
                    line(x + i, y, x + i, y + 50); // draw line
                    loopCount++; // count the number of tally marks in the cell grid
                }
            }

            // if there are four tally marks, draw the line through them
            if (loopCount < mouseClicks) {
                stroke("salmon");
                strokeWeight(5);
                loopCount++;
                line(x, y + 45, x + 100, y + 5); // draw line
            }
        }
    }
} // close mousePressed function

function keyPressed() {
    // reset counts and redraw the background and text
    loopCount = 0;
    mouseClicks = 0;

    clear();
    background(0);

    noStroke();
    fill(75);
    rect(0, 0, 700, 75);
    fill("salmon");
    rect(0, 675, 700, 25);

    let t = "Click the MOUSE again!  Press any KEY to start over!"
    strokeWeight(0);
    fill(255);
    textSize(23);
    text(t, 75, 50);
} // close keyPressed function
