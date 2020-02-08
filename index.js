let playerScore = 0
let paddle
let ball
let bricks = []
let playing

function setup() {
    createCanvas(800, 600);
    playing = true
    paddle = new Paddle();
    ball = new Ball(paddle);
    const rows = 5
    const bricksPerRow = 10
    const brickWidth = width / bricksPerRow
    for (let row = 0; row < rows; row++) {
        for (let i = 0; i < bricksPerRow; i++) {
            brick = new Brick(createVector(brickWidth * i, 25 * row), brickWidth, 25, color(255, 165, 0))
            bricks.push(brick)
        }
    }
}

function draw() {
    background(0)
    if (playing === true) {

        if (keyIsDown(LEFT_ARROW)) {
            paddle.move('left')
        } else if (keyIsDown(RIGHT_ARROW)) {
            paddle.move('right')
        }

        paddle.display()
        ball.update();
        ball.display()
        ball.bounceEdge();
        ball.bouncePaddle();
    }
    if (ball.offScreen()) {
        playing = false
        textSize(60)
        text(`score:${playerScore} You Lose!!`, 150, 300)
        fill(255, 0, 0)
    }

    for (let i = bricks.length - 1; i >= 0; i--) {
        const brick = bricks[i]
        brick.display();
        if (brick.collide(ball)) {
            ball.reverseY();
            bricks.splice(i, 1)
            playerScore += brick.points
        }
    }
    if (bricks.length === 0) {
        playing = false
        textSize(60)
        text(`score:${playerScore} YOU WIN!!!!`, 150, 300)
        fill(255)
    }
}

