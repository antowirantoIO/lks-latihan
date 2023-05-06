const move = {
    up: false,
    right: false,
    down: false,
    left: false
}

window.addEventListener('keydown', (ev) => {
    console.log(ev.code)
    if(ev.code === 'KeyW' || ev.code === 'ArrowUp'){
        move.up = true
        move.right = false
        move.down = false
        move.left = false
    } else if(ev.code === 'KeyD' || ev.code === 'ArrowRight'){
        move.up = false
        move.right = true
        move.down = false
        move.left = false
    } else if(ev.code === 'KeyS' || ev.code === 'ArrowDown'){
        move.up = false
        move.right = false
        move.down = true
        move.left = false
    } else if(ev.code === 'KeyA' || ev.code === 'ArrowLeft'){
        move.up = false
        move.right = false
        move.down = false
        move.left = true
    }
})

export default move