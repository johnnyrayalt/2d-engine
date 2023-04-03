import Ball from './Ball';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let LEFT, RIGHT, UP, DOWN;
let friction = 0.1;

const BALLS = [];

function addEventListeners() {
    const values = [true, false];
    values.forEach(bool => {
        canvas.addEventListener((bool ? 'keydown' : 'keyup'), (e) => {
            if(e.code === 'ArrowDown') {
                DOWN = bool;
            }

            if(e.code === 'ArrowLeft') {
                LEFT = bool;
            }

            if(e.code === 'ArrowRight') {
                RIGHT = bool;
            }

            if(e.code === 'ArrowUp') {
                UP = bool;
            }
        });
    })
}
function keyControl(b) {
    addEventListeners();

    if(LEFT) {
        b.acc.x = -b.acceleration;
    }

    if(UP) {
        b.acc.y = -b.acceleration;
    }

    if(DOWN) {
        b.acc.y = b.acceleration;
    }

    if(RIGHT) {
        b.acc.x = b.acceleration;
    }

    if(!UP && !DOWN) {
        b.acc.y = 0;
    }

    if(!RIGHT && !LEFT) {
        b.acc.x = 0;
    }

    b.acc = b.acc.unit().mult(b.acceleration);
    b.vel = b.vel.add(b.acc);
    b.vel = b.vel.mult(1-friction);

    b.x += b.vel.x;
    b.y += b.vel.y;
}
const mainLoop = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    BALLS.forEach((b) => {
        b.draw();
        if (b.player) {
            keyControl(b);
        }
        b.display();
    })
    requestAnimationFrame(mainLoop)
}
requestAnimationFrame(mainLoop)

const ball1 = new Ball(200, 200, 30, BALLS, ctx);
ball1.player = true;
