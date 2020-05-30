import entity from './entity.js'

export default GAME => {
    const screen = entity(null, 0, 0, GAME.resolution.width, GAME.resolution.height)
    screen.image = document.createElement('canvas')
    screen.image.id = 'game'
    screen.image.style.display = 'block'
    screen.image.style.margin = 'auto'
    screen.image.style.position = `absolute`
    screen.image.style.top = `50%`
    screen.image.style.left = `50%`
    screen.image.style.transform = `translate(-50%, -50%)` 
    document.body.appendChild(screen.image)
    document.body.style.backgroundColor = '#000'
    document.body.style.margin = 0
    const ctx = screen.image.getContext('2d')
    screen.render = function(ctx){
        ctx.clearRect(0, 0, screen.image.width, screen.image.height)
    }

    const resize = () => {
        let h = window.innerHeight
        let w = window.innerWidth
        let ratio = 16/9

        if (h < w/ratio)
            w = h * ratio
        else
            h = w / ratio
        
        screen.image.width = GAME.resolution.width
        screen.image.height = GAME.resolution.height
        screen.image.style.imageRendering = `pixelated`
        screen.image.style.width = `${w}px`
        screen.image.style.height = `${h}px`
    }

    resize()

    window.addEventListener('resize', resize)
    return screen
}