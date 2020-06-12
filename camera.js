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
    const resolution = GAME.settings.resolution
    let mouse = GAME.entities.get('mouse')
    const e = entity(null, 0, 0, screen.image.width, screen.image.height)
    e.speed = 1
    e.last_delta_x = 0
    e.last_delta_y = 0
    e.lock_target = false
    e.threshold = 150
    e.update = function(dt){
        if (!mouse || !mouse.offsetX || !mouse.offsetY) {
            mouse = GAME.entities.get('mouse')
            return
        }
        const screen_x = Math.floor(mouse.offsetX / screen.image.style_width * resolution.width)
        const screen_y = Math.floor(mouse.offsetY / screen.image.style_height * resolution.height)
        let x = 0;
        let y = 0;
        //if the player does not have a destination
        //and if the mouse position exceeds the threshold
        //we move the camera x and y by the screens x and and y minus the width/2
        if (this.target.destination == null)
        {
            if(Math.abs(screen_x - (resolution.width/2)) > this.threshold)
            {
                x = screen_x - resolution.width/2
            }
            if(Math.abs(screen_y - (resolution.height/2)) > this.threshold)
            {
                y = screen_y - resolution.height/2
            }
            this.lock_target = (x == 0 && y == 0)
            this.x += Math.floor(this.speed*GAME.dt*x)
            this.y += Math.floor(this.speed*GAME.dt*y)
            this.last_delta_x = this.target.x - this.x
            this.last_delta_y = this.target.y - this.y
        }
        else
        {
            this.x = clamp(this.target.x - this.last_delta_x, 0, map.width - screen.image.width)
            this.y = clamp(this.target.y - this.last_delta_y, 0, map.height - screen.image.height)
        }

        const camera_center_x = this.x + (this.width / 2)
        const camera_center_y = this.y + (this.height / 2)
        this.x += this.speed * GAME.dt * (this.target.x - camera_center_x + this.target.width/2)
        this.y += this.speed * GAME.dt * (this.target.y - camera_center_y + this.target.height/2)
        this.last_delta_x = this.target.x - this.x
        this.last_delta_y = this.target.y - this.y
        
        this.x = clamp(
            this.x,
            0,
            map.width - screen.image.width
        )
        this.y = clamp(
            this.y,
            0,
            map.height - screen.image.height
        )
        this.x = Math.floor(this.x)
        this.y = Math.floor(this.y)
    }
    e.set_target = function(target){
        this.target = target
    }
    e.set_target(player)
    return e
}