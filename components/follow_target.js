const clamp = (coordinate, min, max) => {
    if (coordinate < min)
        return min
    else if (coordinate > max)
        return max
    else return coordinate
}

export default function(GAME){
    const screen = GAME.entities.get('screen')
    const map = GAME.entities.get('map')
    const resolution = GAME.settings.resolution
    const mouse = GAME.entities.get('mouse')
    if (!mouse || !mouse.offsetX || !mouse.offsetY) {
        return
    }
    if (!this.target)
        throw new Exception('no target applied to main camera')
    
    this.screen_x = Math.floor(mouse.offsetX / screen.image.style_width * resolution.width)
    this.screen_y = Math.floor(mouse.offsetY / screen.image.style_height * resolution.height)
    let x = 0;
    let y = 0;
    this.a_x = Math.abs(this.screen_x - (resolution.width/2))
    this.a_y = Math.abs(this.screen_y - (resolution.height/2))
    if(this.a_x > this.threshold)
        x = this.screen_x - resolution.width/2 - this.target.width/2
    if(this.a_y > this.threshold)
        y = this.screen_y - resolution.height/2 - this.target.height/2
    this.x += Math.floor(this.speed*GAME.dt*x)
    this.y += Math.floor(this.speed*GAME.dt*y)
    if (this.target.destination){
        this.x = clamp(this.target.x - this.last_delta_x, 0, map.width - screen.image.width)
        this.y = clamp(this.target.y - this.last_delta_y, 0, map.height - screen.image.height)
    }
    
    const camera_center_x = this.x + (this.width / 2)
    const camera_center_y = this.y + (this.height / 2)

    this.x += Math.floor(this.speed * GAME.dt * (this.target.x +this.target.width/2- camera_center_x))
    this.y += Math.floor(this.speed * GAME.dt * (this.target.y +this.target.height/2- camera_center_y))
    this.last_delta_x = Math.floor(this.target.x - this.x)
    this.last_delta_y = Math.floor(this.target.y - this.y)
    
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
}