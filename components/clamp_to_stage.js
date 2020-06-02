export default function(GAME){
    const map = GAME.entities.get('map')
    if (this.x < 0) this.x = 0
    if (this.y < 0) this.y = 0
    if (this.x > map.width - this.width)
        this.x = map.width - this.width
    if (this.y > map.height - this.height)
        this.y = map.height - this.height
}