import button from './button.js'
import entity from '../entity.js'

export default GAME => {
    const resolution = GAME.settings.resolution
    const player = GAME.entities.get('player')
    const camera = GAME.entities.get('camera')
    const mouse = GAME.entities.get('mouse')
    const screen = GAME.entities.get('screen')
    const debug = entity()
    debug.x = debug.y = 0
    debug.width = window.innerWidth
    debug.height = window.innerHeight
    debug.render = function(ctx){
        const fontsize = 12
        ctx.save()
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.font = `${fontsize}px monospace`
        ctx.fillStyle = 'rgba(200, 0, 0, 1)'

        const content = [
            `DEBUG:`,
            `player: { x: ${player.x}, y: ${player.y} }`,
            `mouse:  { x: ${mouse.x},  y: ${mouse.y} }`,
            `camera: { x: ${camera.x}, y: ${camera.y}, a_x: ${camera.a_x}, a_y: ${camera.a_y}, last_delta_x: ${camera.last_delta_x}, last_delta_y: ${camera.last_delta_y} }`,
        ]
        content.forEach((line,index) => {
            ctx.fillText(line, this.x, this.y + (index*fontsize) + fontsize)
        })
        ctx.restore()
    }
    return debug
}