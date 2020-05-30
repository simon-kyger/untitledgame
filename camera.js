import entity from './entity.js'

const clamp = (coordinate, min, max) => {
    if (coordinate < min)
        return min
    else if (coordinate > max)
        return max
    else return coordinate
}

export default GAME => {
    const e = entity(null, 0, 0, GAME.screen.image.width, GAME.screen.image.height)
    e.update = function(dt){
        this.x = clamp(
            this.target.x - GAME.screen.image.width/2 + this.target.width /2,
            0,
            GAME.entities.get('map').width - GAME.screen.image.width
        )
        this.y = clamp(
            this.target.y - GAME.screen.image.height/2 + this.target.height /2,
            0,
            GAME.entities.get('map').height - GAME.screen.image.height
        )
    }
    e.set_target = function(target){
        this.target = target
    }
    e.set_target(GAME.entities.get('player'))
    if (GAME.debug)
        e.render = function(ctx){
            ctx.save()
            ctx.fillStyle = '#000'
            ctx.strokeRect(this.x, this.y, this.width, this.height)
            ctx.restore()
        }
    return e
}