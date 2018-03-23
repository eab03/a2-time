// Second assignment for Creative Exploration on the Web
// Part A: Tally-Ho!

// Based on code from Delia's week 5 section

// DEFINE VARIABLES
let mouseClicks = 0;
let loopCount = 0;

function setup() {
    let canvas = createCanvas(700, 700);
    canvas.parent("mycontainer");

    noStroke();
    background(0);

    // top and bottom rectangles
    fill(80);
    rect(0, 0, 700, 75);
    fill("salmon");
    rect(0, 675, 700, 25);

    // text at the top
    let text1 = "Click the MOUSE to begin!  Press any KEY to start over!"
    fill(255);
    textFont("Comfortaa");
    textSize(20);
    text(text1, 60, 50);
} // close setup function

function draw() {}

// MOUSE CLICK EVENT HANDLER
function mousePressed() {

    // reset loop count to zero before beginning loop
    loopCount = 0;

    // increment total count of mouse clicks
    mouseClicks++;

    // create rows for the tally marks (150 pixels apart on the y axis)
    // position groups of tally marks on the x axis (170 pixels apart)
    for (var y = 125; y <= height; y += 150) {
        for (var x = 50; x <= width; x += 170) {
            // with each mouse click, starting at the first x,y position (50,125), draw up to four lines
            for (let i = 20; i < 100; i = i + 20) { // create a space in between each line (20 pixels)
                // if the loop count is less than the total number of mouse clicks, draw a line and increment the loop count
                if (loopCount < mouseClicks) {
                    stroke(255);
                    strokeWeight(4);
                    line(x + i, y, x + i, y + 50); // draw line
                    loopCount++; // increment loop count
                    // console.log("line:" + loopCount + " - clicks: " + mouseClicks);
                }
            }
            // if the loop count is still less than the number of mouse clicks, draw a fifth diagonal line
            if (loopCount < mouseClicks) {
                stroke("salmon");
                strokeWeight(5);
                loopCount++; // increment loop count
                line(x, y + 45, x + 100, y + 5); // draw line
            }
        }
    }
} // close mousePressed function

function keyPressed() {
    // when press any key, reset the counts
    loopCount = 0;
    mouseClicks = 0;

    // clear the canvas
    clear();

    // redraw background
    noStroke();
    background(0);

    // redraw rectangles at the top and bottom
    fill(75);
    rect(0, 0, 700, 75);
    fill("salmon");
    rect(0, 675, 700, 25);

    // redraw text
    let text2 = "Click the MOUSE again!  Press any KEY to start over!"
    strokeWeight(0);
    fill(255);
    textFont("Comfortaa");
    textSize(20);
    text(text2, 75, 50);
} // close keyPressed function
