class Brick {
    constructor(location, width, height, color) {
        this.location = location
        this.width = width
        this.points = 1
        this.height = height
        this.color = color
    }

    display() {
        fill(this.color)
        rect(this.location.x, this.location.y, this.width, this.height)
    }

    collide(ball) {
        if (ball.location.y - ball.radius <= this.location.y + this.height &&//collides with bottom
            ball.location.y + ball.radius >= this.location.y &&//collides with top
            ball.location.x + ball.radius >= this.location.x &&//collides with right side
            ball.location.x - ball.radius <= this.location.x + this.width) {//collides with left side
            return true
        }
    }

}