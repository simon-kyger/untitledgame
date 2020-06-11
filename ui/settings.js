import button from './button.js'
import entity from '../entity.js'

export default GAME => {
    const k = GAME.entities.get('keyboard')
    const resolution = GAME.settings.resolution
    const settings = entity(null, 
        0, 0, 
        resolution.width, resolution.height
    )
    settings.visible = false
    settings.debounce = Date.now()
    settings.debounce_threshold = 200
    settings.buttons = [
        button('paused', () => {}),
        button('controls', () => {
            console.log(`we made it this far lmao`)
        }),
        button('resolution', () => {
            console.log(`we made it this far lmao`)
        }),
        button('save', () => {
            console.log(`we made it this far lmao`)
        }),
    ]
    settings.buttons.forEach((button, index) => {
        const dithering = 2
        const offset = 0
        button.x = resolution.width * .45
        button.y = button.fontsize * ((index*dithering)+offset) + button.fontsize
        button.height = button.fontsize
        button.width = button.name.length * button.fontsize
    })
    settings.update = function(GAME){
        if (k.settings.state && (this.debounce < Date.now() - this.debounce_threshold)){
            this.debounce = Date.now()
            GAME.paused = !GAME.paused
            this.visible = !this.visible
            this.buttons.forEach(button => button.update(GAME))
        }
    }
    //TODO: this is rendering to the main screen, should be rendered to a buffer or something
    settings.render = function(ctx){
        ctx.save()
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        if (this.visible){
            ctx.fillStyle = `rgba(0, 0, 0, .5)`
            ctx.fillRect(this.x, this.y, this.width, this.height)
            settings.buttons.forEach(button => button.render(ctx))
        }
        ctx.restore()
    }
    return settings
}