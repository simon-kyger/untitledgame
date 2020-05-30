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
        const k = GAME.keyboard
        if (k.up.state)
            this.y -= this.speed * dt
        if (k.down.state)
            this.y += this.speed * dt
        if (k.left.state)
            this.x -= this.speed * dt
        if (k.right.state)
            this.x += this.speed * dt
        if (this.x < 0) this.x = 0
        if (this.y < 0) this.y = 0
        if (this.x > GAME.entities.get('map').width - this.width)
            this.x = GAME.entities.get('map').width - this.width
        if (this.y > GAME.entities.get('map').height - this.height)
            this.y = GAME.entities.get('map').height - this.height
        this.x = Math.floor(this.x)
        this.y = Math.floor(this.y)
    }
    player.render = function(ctx){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    return player
}