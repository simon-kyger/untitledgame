import entity from './entity.js'

export default GAME => {
    const player = entity(
        null, 
        GAME.data.player.x, 
        GAME.data.player.y, 
        GAME.data.player.width,
        GAME.data.player.height
    )
    GAME.data.player.components.forEach(component=> player.add_component(component, GAME))
    player.speed = 140
    player.set_destination = function(x, y) {
        this.destination = {
            x: x,
            y: y
        }
    }
    player.set_destination(player.x, player.y)
    player.render = function(ctx){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    return player
}