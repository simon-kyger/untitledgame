const screen = document.createElement('canvas')
document.body.appendChild(screen)
screen.id = 'game'
document.body.style.margin = 0
const ctx = screen.getContext('2d')
const repaint = () => ctx.clearRect(0, 0, screen.width, screen.height)

const resize = () => {
    screen.width = window.innerWidth
    screen.height = window.innerHeight
    ctx.imageSmoothingEnabled = false
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
}

resize()

window.addEventListener('resize', resize)

export default {
    ctx: ctx,
    repaint: repaint
}