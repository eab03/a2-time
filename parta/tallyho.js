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
    background(169, 169, 169);

    let s = "Click the MOUSE to begin!  Press any KEY to start over!"
    noStroke();
    fill(0);
    textSize(21.25);
    text(s, 90, 50);
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
    let yOffset = 100;
    let objOffset = 20;

    for (var y = 100; y <= height; y += yOffset) {
        for (var x = 50; x <= width; x += xOffset) {
            // starting in this first cell at x,y position 50,100
            // draw a series of four tally marks with a width of 20 (objOffset)
            // until reach edge of cell grid (xOffset)

            for (let i = 20; i < 100; i = i + objOffset) {
                if (loopCount < mouseClicks) {
                    console.log("line:" + loopCount + " - clicks: " + mouseClicks);
                    stroke(0);
                    strokeWeight(3);
                    line(x + i, y, x + i, y + 50); // draw line
                    loopCount++; // count the number of tally marks in the cell grid
                }
            }

            // if there are four tally marks, draw the line through them
            if (loopCount < mouseClicks) {
                stroke("salmon");
                strokeWeight(3);
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
    background(169, 169, 169);

    let t = "Click the MOUSE again!  Press any KEY to start over!"
    noStroke();
    fill("black");
    textSize(21.25);
    text(t, 90, 50);
} // close keyPressed function
