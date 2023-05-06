import { canvas, ctx } from "./canvas.js"
import move from "./move.js"
import Grid from "./grid.js"
import Snake from "./snake.js"

const FPS = 4

const grid = new Grid({canvas})
const snake = new Snake({canvas, ctx, grid, move})

const play = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    snake.draw()

    setTimeout(() => {
        requestAnimationFrame(play)
    }, 1000 / FPS)
}

play()