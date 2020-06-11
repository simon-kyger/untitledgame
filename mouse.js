export default GAME => {
    const mouse = GAME.data.controls.mouse
    const player = GAME.entities.get('player')
    const camera = GAME.entities.get('camera')
    const screen_style = GAME.screen.image.style
    const resolution = GAME.resolution
    mouse.set = function(key, newkey){
        if (Object.keys(this).filter(e => e == key).length)
            this[key] = newkey 
        else throw Exception(`unkown key ${key}`)
    }
    
    mouse.listen = function(){
        this.x = Math.round(this.offsetX / screen_style.width.slice(0, -2) * resolution.width + camera.x)
        this.y = Math.round(this.offsetY / screen_style.height.slice(0, -2) * resolution.height + camera.y)
    }
    GAME.screen.image.addEventListener('mousedown', e => {
        switch (e.button) {
            case 0:
                mouse.lmb.state = true
                break;
            case 2:
                mouse.rmb.state = true
                break;
        }
    })
    GAME.screen.image.addEventListener('mouseup', e => {
        switch (e.button) {
            case 0:
                mouse.lmb.state = false
                break;
            case 2:
                mouse.rmb.state = false
                break;
        }
    })
    GAME.screen.image.addEventListener('mousemove', e=> {
        mouse.offsetX = e.offsetX
        mouse.offsetY = e.offsetY
    })
    return mouse
}