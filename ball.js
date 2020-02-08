class Ball {
    constructor(paddle) {
        this.radius = 15
        this.size = this.radius * 2
        this.location = createVector(paddle.location.x + (paddle.width), paddle.location.y - this.radius)
        this.color = color(128, 0, 128)
        this.velocity = createVector(5, -5)
        this.paddle = paddle
    }
    display() {
        fill(this.color)
        ellipse(this.location.x, this.location.y, this.size, this.size)
    }
    update() {
        this.location.add(this.velocity)
    }

    bounceEdge() {
        if (this.location.x + this.radius >= width) {//check right edge
            this.velocity.x *= -1
        } else if (this.location.x - this.radius <= 0) {//check left edge
            this.velocity.x *= -1
        } else if (this.location.y - this.radius <= 0) {//check top edge
            this.reverseY()
        }
    }

    bouncePaddle() {
        if (this.location.x + this.radius >= this.paddle.location.x &&
            this.location.x - this.radius <= this.paddle.location.x + this.paddle.width) {//within the width of paddle
            if (this.location.y + this.radius >= this.paddle.location.y) {
                this.reverseY()
                this.location.y = this.paddle.location.y - this.radius - 1
            }
        }
    }

    reverseY() {
        this.velocity.y *= -1
    }

    offScreen() {
        return this.location.y - this.radius > height
    }
}