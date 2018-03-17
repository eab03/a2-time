//define variables
let mouseClicks = 0;
let loopCount = 0;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.position(15, 275);
  canvas.parent('container');
}

function draw() {}

//mouse click event handler
function mousePressed() {
  background(204, 234, 255, 100);
//   let h = hour();
//   let m = minute();
//   let s = second();

//   let sColor = map(s, 0, 59, 255, 125);
//   let mColor = map(m, 0, 59, 126, 50);
//   let hColor = map(h, 0, 23, 49, 0);





  /// reset loop count to zero before we enter loop
  loopCount = 0;

  // increment total count
  mouseClicks++;

  //nested loops, think of rows and colums, creating a grid
  //for every x, the outer loop, draw on the y coordinate till we reach max height
  //we added 30 pixels so we do not start from 0, so we have a margin

  for (var y = 50; y <= height - 20; y += 100) {
    for (var x = 50; x <= width - 20; x += 150) {
      //set the stroke black
      stroke(0);
      //Canvas "grid"
      //----!!!!---we are in the first cell----!!!!!
      //x=30, y=30, grid cell width is xOffset and grid cell height is yOffset
      //we will draw rectangles from x=30, y=30, starting
      //with a with of 5 (objOffset)
      //we will keep adding ofset rectangles till we reach the width of the cell (xOffset)

      for (let i = 20; i < 100; i = i + 20) {
        if (loopCount < mouseClicks) {
          console.log("rect:" + loopCount + " - clicks: " + mouseClicks);
          stroke("salmon");
          strokeWeight(3);
          line(x + i, y, x + i, y + 50);
          //we are counting the number of rectangles in the cell grid
          loopCount++;
        }
      }
      if (loopCount < mouseClicks) {
        stroke("red");
        strokeWeight(5);
        loopCount++;
        line(x, y + 45, x + 100, y + 5);
      }
    }
  }
}

function keyPressed() {
  // reset everything
  loopCount = 0;
  mouseClicks = 0;
  clear();
  background("blue");
  color("yellow");
  text("Click the Mouse!");
}
