import entity from './entity.js'

export default GAME => {
    const player = entity(
        null, 
        GAME.data.player.x, 
        GAME.data.player.y, 
        GAME.map.tilewidth * GAME.scale,
        GAME.map.tileheight * GAME.scale
    )
    GAME.data.player.components.forEach(component=> player.add_component(component, GAME))
    player.speed = 140
    player.render = function(ctx){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    return player
}