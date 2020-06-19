import entity from './entity.js'

export default GAME => {
    const player = GAME.data.player
    const components = GAME.data.player.components
    Object.assign(player, entity())
    components.forEach(component=> player.add_component(component, GAME))
    player.set_destination = function(x, y) {
        x % 2 == 1 ? x++ : null
        y % 2 == 1 ? y++ : null
        this.destination = {
            x: x,
            y: y
        }
    }
    player.collidable = true
    player.set_destination(player.x, player.y)
    player.render = function(ctx){
        ctx.fillStyle = 'red'
        ctx.fillRect(Math.round(this.x), Math.round(this.y), Math.round(this.width), Math.round(this.height))
    }
    return player
}