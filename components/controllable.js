export default function(GAME){
    const k = GAME.keyboard
    if (k.up.state)
        this.y -= this.speed * GAME.dt
    if (k.down.state)
        this.y += this.speed * GAME.dt
    if (k.left.state)
        this.x -= this.speed * GAME.dt
    if (k.right.state)
        this.x += this.speed * GAME.dt
    this.x = Math.round(this.x)
    this.y = Math.round(this.y)
    
    if (k.up.state || k.down.state || k.left.state || k.right.state){
        this.destination = null
    }
}