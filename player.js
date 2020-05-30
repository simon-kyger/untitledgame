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
        if (this.x > GAME.entities.get('map').width - window.innerWidth)
            this.x = GAME.entities.get('map').width - window.innerWidth
        if (this.y > GAME.entities.get('map').height - window.innerHeight)
            this.y = GAME.entities.get('map').height - window.innerHeight
    }
    player.render = function(ctx){
        ctx.save()
        ctx.fillStyle = 'red'
        ctx.fillRect(window.innerWidth/2-this.width/2, window.innerHeight/2-this.height/2, this.width, this.height)
        ctx.restore()
        console.log(this.x, this.y)
    }
    return player
}