$("#lose").hide();

const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
    // [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    // [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    // [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    // [0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
    // [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

class SnakePart { // every snake body
    constructor (x , y) {
        this.x = x;
        this.y = y;
    }
}


class Ghost {
    constructor(ghostX, ghostY) {
        this.ghostX = ghostX;
        this.ghostY = ghostY;
        this.navigation = { // object
            up: 0,
            down: 1,
            left: 2,
            right: 3
        }
        this.movingDirection = Math.floor(Math.random() * Object.keys(this.navigation).length);
        // this.movingDirection = 2;

        this.directionTimerDefault = this.#random(10, 20); // 10, 50 (1, 3) more challenge and sporadic
        this.directionTimer = this.directionTimerDefault;

    }

    draw(ctx) {
        this.#atEnd();
        this.#changeDirection();
        this.#move();
        ctx.fillStyle = 'green';
        ctx.fillRect(this.ghostX * tileCount, this.ghostY * tileCount, tileSize, tileSize);
        // console.log(this.movingDirection, this.#collide();
        
        if (tailLength > 5) {
            speed = 9;
          }
          if (tailLength > 10) {
            speed = 11;
          }
        
    }

    #atEnd() {
        if (this.ghostY < 1) {
            this.ghostY = 23;
        } else if (this.ghostY > 21) {
            this.ghostY = 0;
        } else if (this.ghostX < 1) {
            this.ghostX = 23;
        } else if (this.ghostX > 22) {
            this.ghostX = 0;
        }
    }

    #move() {
        if (!this.#collide(this.movingDirection)) {
            switch (this.movingDirection) {
                case 0:
                    this.ghostY -= 1;
                    break;
                case 1:
                    this.ghostY += 1;
                    break;
                case 2:
                    this.ghostX -= 1;
                    break;
                case 3:
                    this.ghostX += 1;
                    break;              
            }
        } 
        else if (this.#collide(this.movingDirection)) {
            this.movingDirection = Math.floor(Math.random() * Object.keys(this.navigation).length);
        }
    }

    #collide(direction) {
        if (direction == null) {
            return;
        }
        let x = 0;
        let y = 0;
        switch (direction) {
            case 0:
                y = this.ghostY - 1;
                x = this.ghostX;
                break;
            case 1:
                y = this.ghostY + 1;
                x = this.ghostX;
                break;
            case 2:
                x = this.ghostX - 1;
                y = this.ghostY;
                break;
            case 3:
                x = this.ghostX + 1;
                y = this.ghostY;
                break;        

        } 
            let square = map[y][x];
            if (square == 1) {
                 return true;
            }

         return false;
    }

    #changeDirection() {
        this.directionTimer --;
        let newMoveDirection = null;
        if (this.directionTimer == 0) {
            this.directionTimer = this.directionTimerDefault;
            newMoveDirection = Math.floor(Math.random() * Object.keys(this.navigation).length);
        }

        if (newMoveDirection != null && this.movingDirection != newMoveDirection) {
            if (!this.#collide(newMoveDirection)) {
                this.movingDirection = newMoveDirection;
            }
        }
    }

    #random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

class Apple {
    constructor() {
        this.appleX = 5;
        this.appleY = 5;
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.appleX * tileCount, this.appleY * tileCount, tileSize, tileSize);
    }
    

    randomApple() {
        this.appleX = Math.floor(Math.random() * tileCount);
        this.appleY = Math.floor(Math.random() * tileCount); 

        while (map[this.appleY][this.appleX] == 1) {
            this.randomApple();
        }
    }

}
  
const squares = [];

let speed = 7;


const snakeParts = [];
let tailLength = 0;

let headX = 10;
let headY = 10;
    
let xVelocity = 0;
let yVelocity = 0;

let score = $("#highscore").text();

const sound = new Audio("./sound/gulp.mp3");



ghost1 = new Ghost (21, 20);
apple1 = new Apple();
function drawGame() { // this function is the Game loop
    changePosition();
    let result = isGameOver(ghost1);
    if (result) {
        $("#lose").show();
        return;
    }

    isAtEnd();
    clearScreen();

    checkCollisionWithApple(apple1);
    apple1.draw(ctx);
    drawSnake();
    // ghost1.draw(ctx);

    setTimeout(drawGame, 1000/speed);
}

function isAtEnd() {
    if (headX < 0) {
        headX = 22;
    } else if (headX > 22) {
        headX = 0;
    } else if (headY < 0) {
        headY = 23;
    } else if (headY > 23) {
        headY = 0;
    }
}

function isGameOver(ghost) {
    let gameOver = false;
    if (yVelocity === 0 && xVelocity === 0)  {
        gameOver = false;
    }
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts [i]; // grab a part from snake body
        if (part.x == headX && part.y === headY || part.x == ghost.ghostX && part.y == ghost.ghostY) {
            gameOver = true;
            break;
        }
    }

    for (let row = 0; row < map.length; row++) {
        for (let column = 0; column < map[row].length; column++) {
            if (map[row][column] == 1 && headX == column && headY == row) {
                gameOver = true;
            }
        }
    }

    if (ghost.ghostX == headX && ghost.ghostY == headY) {
        gameOver = true;
    }
    

    return gameOver;
}

function clearScreen() { // for displaying the screen for each number in  the map
    for (let j = 0; j < map.length; j++) {
        for (let i = 0; i < map[j].length; i++) {
            if (map[j][i] === 0) {
                ctx.fillStyle = 'black';
            } else if (map[j][i] === 1) {
                ctx.fillStyle = 'blue';
            }
            ctx.fillRect(i * tileCount, j * tileCount, 20, 20);  // (x, y, width, height)
        }
    }    
    // ctx.fillRect(19.1 * tileCount, 0, tileSize, tileSize);
}

function drawSnake() {
    ctx.fillStyle = 'orange'; // tail 
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    snakeParts.push(new SnakePart(headX, headY)); // put the item at where the head was
    while (snakeParts.length > tailLength) {
        snakeParts.shift(); // remove the furthest item from the snake parts (the first item added to the array)
    }

    ctx.fillStyle = 'yellow'; // head
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changePosition() {
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}


function checkCollisionWithApple(apple) {
    if (apple.appleX == headX && apple.appleY == headY) {
        apple.randomApple();
        tailLength++;
        sound.play();
        $("#score").text(tailLength);
    }
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
    if (event.keyCode == 38) { // up
        if (tailLength !== 0 && yVelocity == 1)
            return;
        yVelocity = -1;
        xVelocity = 0;
    } else if (event.keyCode == 40) { // down
        if (tailLength !== 0 && yVelocity == -1) 
            return;
        yVelocity = 1;
        xVelocity = 0;
    } else if (event.keyCode == 37) { // left
        if (tailLength !== 0 && xVelocity == 1)
            return;
        yVelocity = 0;
        xVelocity = -1;
    } else if (event.keyCode == 39) { // right
        if (tailLength !== 0 && xVelocity == -1) 
            return;
        yVelocity = 0;
        xVelocity = 1;
    }

}


drawGame(); // drawing the game in loop

