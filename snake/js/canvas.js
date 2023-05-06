const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 960
canvas.height = 600

document.body.append(canvas)

export {canvas, ctx}