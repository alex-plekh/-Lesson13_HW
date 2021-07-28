class Figure {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

class Line extends Figure {
    constructor(x1, y1, x2, y2, color) {
        super(x1, y1, color);
        this.x2 = x2;
        this.y2 = y2;
    }

    draw(context) {
        const ctx = context.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    };
}

class Circle extends Figure {
    constructor(x, y, r, color) {
        super(x, y, color);
        this.r = r;
    }

    draw(context) {
        const ctx = context.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }
}

class Rect extends Figure {
    constructor(x, y, w, h, color) {
        super(x, y, color);
        this.w = w;
        this.h = h;
    }

    draw(context) {
        const ctx = context.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

class Canvas {
    constructor(id) {
        this.canvas = document.getElementById(id);
    }

    add() {
        for (let i = 0; i < arguments.length; i++) {
            arguments[i].draw(this.canvas);
        }
    }
}

const drawArea = new Canvas('canvasID');

const line1 = new Line(400, 300, 150, 400, 'gray'); // x1, y1, x2, y2, color
const line2 = new Line(425, 325, 175, 425, 'gray'); // x1, y1, x2, y2, color

const circleSmall = new Circle(180, 140, 50, 'rgba(207, 230, 255, .5)'); // x, y, r, color
const circleBig = new Circle(220, 210, 90, 'rgba(207, 230, 255, .5)'); // x, y, r, color

const rectGreen = new Rect(470, 225, 100, 200, 'rgba(206, 255, 226, .5)'); // x, y, w, h, color
const rectRad = new Rect(505, 205, 180, 90, 'rgba(235, 205, 232, .5)'); // x, y, w, h, color
const rectYellow = new Rect(650, 260, 100, 70, 'rgba(234, 224, 84, .5)'); // x, y, w, h, color

drawArea.add(line1, line2);
drawArea.add(circleSmall, circleBig);
drawArea.add(rectGreen, rectRad, rectYellow);

for (let count = 0, x1 = 0, x2 = 20; x1 < 800; count++, x1 += 20, x2 += 20) {
    if (count % 2) drawArea.add(new Line(x1, 20, x2, 0, 'red'));
    else drawArea.add(new Line(x1, 0, x2, 20, 'red'));
}





