import entity from './entity.js'

export default GAME => {
    const player = entity(
        null, 
        GAME.data.player.x, 
        GAME.data.player.y, 
        GAME.map.tilewidth * GAME.scale,
        GAME.map.tileheight * GAME.scale
    )
    player.speed = 700
    player.update = function(dt){
        const k = GAME.entities.get('keyboard')
        if (k.up.state)
            this.y -= this.speed * dt
        if (k.down.state)
            this.y += this.speed * dt
        if (k.left.state)
            this.x -= this.speed * dt
        if (k.right.state)
            this.x += this.speed * dt
    }
    player.render = function(ctx){
        ctx.save()
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }
    return player
}