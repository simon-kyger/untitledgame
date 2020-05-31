import entity from './entity.js'

export default GAME => {
    const player = entity(
        null, 
        GAME.data.player.x, 
        GAME.data.player.y, 
        GAME.map.tilewidth * GAME.scale,
        GAME.map.tileheight * GAME.scale
    )
    player.add_component('controllable', GAME)
    player.add_component('clamp_to_stage', GAME)
    player.speed = 700
    player.render = function(ctx){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    return player
}