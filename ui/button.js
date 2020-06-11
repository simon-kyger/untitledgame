export default (name, cb) => {
    const button = {}
    button.name = name
    button.fontsize = 16
    button.render = function(ctx){
        ctx.fillStyle = 'rgba(0, 0, 0, .7'
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.font = `${this.fontsize}px monospace`
        ctx.fillStyle = 'white'
        ctx.fillText(this.name, this.x, this.y+this.fontsize)
    }
    button.update = function(dt){
        if (cb) cb(dt)
    }
    return button
}