# brick breaker game with p5.js

## Implements P5.js library to create a retro game using OOP methods 
### ball.js attributes and methods
* radius
* size (radius * 2)
* location
    *  calculated using vector function
* color
* velocity
    * calculated by vector function
    * updated by bouncePaddle method
    * updated by bounceEdge method
* display method
    * decides color of the ball
    * creates a circle with P5.js
* update method
    * increments ball location with velocity
* bounceEdge method
    * checks if ball has touch the right, left or top of the canvas and reverses the direction
* bouncePaddle method
    * checks if ball collides with paddle and reverses direction
* reverseY method
    * revereses ball velocity by multiply by -1
* offScreen method
    * returns a boolean if the ball goes under the paddle and off screen from bottom of the canvas
### paddle.js attributes and methods
* width and height
* color
* location
    * calculated by vectory function
* speed
    * how fast the player can move the paddle
* display method
    * decides the color of the paddle
    * creates a rectangle using P5.js
* move method
    * increments paddle location by its speed
    * checks that movement is not pushing paddle off screen
### brick.js attributes and methods 
* location
    * passed in as an argument when instantiated
* width and height
* points
    * increments a score counter when hit by the ball
* color
* display method
    * decides color of the brick
    * creates a rectangle using P5.js
* collide method
    * if ball touches a brick it will reverse the direction

## Index.js

#### Variables
* player score
    * increments as bricks get destroyed
* paddle
    * instance of paddle class
* ball
    * instance of ball class
* bricks
    * an array of instances of brick class
        * each instance' location is calculated using nested loops and canvas width and height
* playing
    * boolean to decide what screens to show

#### setup function
* creates instances of canvas as well as all the classes mentioned above

#### draw function
* updates background every frame
* checks player input keys to move paddle
* displays all class instances as well as their update methods
* calls offScreen method on ball
    * if true it will end the game and display a losing message and the score
* if the ball hits a brick it will be removed from the array of instances
* when all bricks are gone the game is over and displays a winning message as well as the score 

