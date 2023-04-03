import Vector from "./Vector";

export default class Ball {
    constructor(x, y, r, BALLS, context) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.player = false;
        this.vel = new Vector(0,0);
        this.acc = new Vector(0, 0);
        this.acceleration = 1;
        this.ctx = context;
        BALLS.push(this);
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
    }

    display() {
        this.vel.drawVec(550, 400, 10, 'green', this.ctx);
        this.acc.unit().drawVec(550, 400, 50, 'blue', this.ctx);
        this.acc.normal().drawVec(550, 400, 50, 'blue', this.ctx);
        this.ctx.beginPath();
        this.ctx.arc(550, 400, 50, 0, 2*Math.PI);
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();
    }
}