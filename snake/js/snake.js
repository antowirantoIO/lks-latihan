const DIRECTION_UP = 0
const DIRECTION_RIGHT = 1
const DIRECTION_DOWN = 2
const DIRECTION_LEFT = 3

class Snake {
    constructor({canvas, ctx, grid, move}){
        this.canvas = canvas
        this.ctx = ctx
        this.grid = grid
        this.move = move

        this.color = 'green'  

        this.x = Math.floor(grid.x / 2)
        this.y = Math.floor(grid.y / 2)

        this.dx = 1
        this.dy = 0
        this.direction = DIRECTION_LEFT

        this.trail = [
            [this.x, this.y],
            [this.x - 1, this.y],
            [this.x - 2, this.y],
            [this.x - 3, this.y],
            [this.x - 4, this.y],
            [this.x - 5, this.y],
        ]

        this.length = 6
    }

    draw(){
        if(this.move.up && this.direction !== DIRECTION_DOWN){
            this.dx = 0
            this.dy = -1
            this.direction = DIRECTION_UP
        } else if(this.move.right && this.direction !== DIRECTION_LEFT){
            this.dx = 1
            this.dy = 0
            this.direction = DIRECTION_RIGHT
        } else if(this.move.down && this.direction !== DIRECTION_UP){
            this.dx = 0
            this.dy = 1
            this.direction = DIRECTION_DOWN
        } else if(this.move.left && this.direction !== DIRECTION_RIGHT){
            this.dx = -1
            this.dy = 0
            this.direction = DIRECTION_LEFT
        }

        this.x += this.dx
        this.y += this.dy

        if(this.y < 0)
            this.y = this.grid.y - 1
        else if(this.x > this.grid.x)
            this.x = 0
        else if(this.y >= this.grid.y)
            this.y = 0
        else if(this.x < 0)
            this.x = this.grid.x - 1

        this.trail.unshift([this.x, this.y])

        while(this.trail.length > this.length)
            this.trail.pop()


        this.trail.forEach(([x, y]) => {
            this.ctx.beginPath()
            this.ctx.fillStyle = this.color
            this.ctx.rect(
                this.y * this.grid.width, 
                this.x * this.grid.height, 
                this.grid.width,
                this.grid.height
            )  
            this.ctx.fill()
        })
    }
}

export default Snake