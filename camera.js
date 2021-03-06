import entity from './entity.js'

export default GAME => {
    const screen = GAME.entities.get('screen')
    const player = GAME.entities.get('player')
    const e = entity()
    e.x = 0
    e.y = 0
    e.width = screen.image.width
    e.height = screen.image.height
    e.add_component('follow_target', GAME)
    e.speed = 1
    e.last_delta_x = 0
    e.last_delta_y = 0
    e.threshold = 150
    e.set_target = function(target){
        this.target = target
    }
    e.set_target(player)
    return e
}