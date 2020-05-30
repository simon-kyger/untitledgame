import entity from './entity.js'

export default GAME => {
    const e = entity()
    e.update = function(dt){
        this.x = e.target.x
        this.y = e.target.y
    }
    e.set_target = function(target){
        this.target = target
    }
    e.set_target(GAME.entities.get('player'))
    if (GAME.debug)
        e.render = function(ctx){
            ctx.save()
            ctx.fillStyle = '#fff'
            ctx.strokeRect(this.x, this.y, this.width, this.height)
            ctx.restore()
        }
    return e
}