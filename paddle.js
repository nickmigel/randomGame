class Paddle {
    constructor() {
        this.width = 150
        this.height = 25
        this.color = color(255)
        this.location = createVector((width / 2) - (this.width / 2), height - 35)
        this.speed = {
            right: createVector(8, 0),
            left: createVector(-8, 0)
        }
    }
    display() {
        fill(this.color)
        rect(this.location.x, this.location.y, this.width, this.height)
    }

    move(direction) {
        this.location.add(this.speed[direction])

        if (this.location.x < 0) {
            this.location.x = 0
        } else if (this.location.x + this.width > width) {
            this.location.x = width - this.width
        }
    }
}