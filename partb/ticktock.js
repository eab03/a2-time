// Second assignment for Creative Explorations on the Web
// Part B: Tick-Tock

function setup() {
    let canvas = createCanvas(700, 700);
    canvas.parent('mycontainer');
    angleMode(DEGREES);
} // close function setup

function draw() {
    background(0);
    // move origin of the canvas to the center and rotate 90 degrees
    translate(width / 2, height / 2);

    let s = second();
    let m = minute();
    let h = hour();

    // based on code from: https://processing.org/examples/clock.html
    let mappedS = map(s, 0, 60, 0, 360) - 90;
    let mappedM = map(m + s / 60, 0, 60, 0, 360) - 90;
    let mappedH = map(h + m / 60, 0, 24, 0, 360 * 2) - 90;

    // DRAW THE OUTER SQUARES
    fill("salmon");
    rect(-275, -275, 550, 550); // changes color each minute

    fill("black");
    rect(-212.5, -212.5, 425, 425); // changes color each hour

    // DRAW CLOCK FACE BACKGROUND
    stroke("salmon");
    strokeWeight(5);
    fill(255);
    ellipse(0, 0, 335);

    fill("salmon");
    ellipse(0, 0, 300);

    // DRAW SECTION DIVIDING LINES and 5 MINUTE MARKERS
    // 5 minute markers
    push();
        rotate(15); // rotate canvas 15 degrees
        for (let a = 0; a < 12; a++) {
            push();
            rotate(a * 30); // draw markers every 30 degrees
            strokeWeight(4); // draw 5 minute markers
            stroke(255, 0, 0, 100);
            line(80, 80, 90, 90);
            pop();
        }

        // dividing lines
        for (let a = 0; a < 12; a++) {
            push();
            rotate(a * 30); // draw lines every 30 degrees
            strokeWeight(1); // draw dividing lines
            stroke(255, 0, 0, 45);
            line(0, 0, 0, 142);
            pop();
        }
    pop();

    // DRAW CENTER ELLIPSES
    stroke(255);
    fill(255, 0, 0);
    strokeWeight(4);
    ellipse(0, 0, 75);

    strokeWeight(8);
    ellipse(0, 0, 5);

    // DRAW AND MOVE CLOCK HANDS
    push();
        rotate(-90);

        // hour hand
        push();
            rotate(mappedH);
            strokeWeight(4);
            line(0, 0, 0, 70);
        pop();

        // minute hand
        push();
            rotate(mappedM);
            strokeWeight(2);
            line(0, 0, 0, 100);
        pop();

        // second hand
        push();
            rotate(mappedS);
            strokeWeight(1);
            line(0, 0, 0, 130);
        pop();

    pop();

    // DIGITAL CLOCK DISPLAY
    // adjust for 12 hour clock
    // based on: https://codepen.io/jaystephens3/pen/qoKgn
    if (h > 12) {
        h = h - 12;
    }

    if (h == 0) {
        h = 12;
    }

    // add leading zeros to minutes and seconds
    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    // draw digital clock numbers
    noStroke();
    fill("white");
    textSize(35);
    text(nf(h) + ":" + nf(m) + ":" + nf(s), -60, 255);

} // close function draw
