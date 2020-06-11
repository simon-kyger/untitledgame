import entity from './entity.js'

const clamp = (coordinate, min, max) => {
    if (coordinate < min)
        return min
    else if (coordinate > max)
        return max
    else return coordinate
}

export default GAME => {
    const screen = GAME.entities.get('screen')
    const map = GAME.entities.get('map')
    const player = GAME.entities.get('player')
    const e = entity(null, 0, 0, screen.image.width, screen.image.height)
    e.update = function(dt){
        this.x = clamp(
            this.target.x - screen.image.width/2 + this.target.width /2,
            0,
            map.width - screen.image.width
        )
        this.y = clamp(
            this.target.y - screen.image.height/2 + this.target.height /2,
            0,
            map.height - screen.image.height
        )
    }
    e.set_target = function(target){
        this.target = target
    }
    e.set_target(player)
    return e
}