import entity from './entity.js'

export default GAME => {
    const mouse = GAME.settings.controls.mouse
    const player = GAME.entities.get('player')
    const camera = GAME.entities.get('camera')
    const screen = GAME.entities.get('screen')
    const resolution = GAME.settings.resolution
    mouse.set = function(key, newkey){
        if (Object.keys(this).filter(e => e == key).length)
            this[key] = newkey 
        else throw Exception(`unkown key ${key}`)
    }
    mouse.update = function(){
        this.x = Math.round(this.offsetX / screen.image.style.width.slice(0, -2) * resolution.width + camera.x)
        this.y = Math.round(this.offsetY / screen.image.style.height.slice(0, -2) * resolution.height + camera.y)
    }
    mouse.render = function(){
        //console.log(this.x, this.y)
    }
    screen.image.addEventListener('mousedown', e => {
        switch (e.button) {
            case 0:
                mouse.lmb.state = true
                break;
            case 2:
                mouse.rmb.state = true
                break;
        }
    })
    screen.image.addEventListener('mouseup', e => {
        switch (e.button) {
            case 0:
                mouse.lmb.state = false
                break;
            case 2:
                mouse.rmb.state = false
                break;
        }
    })
    screen.image.addEventListener('mousemove', e=> {
        mouse.offsetX = e.offsetX
        mouse.offsetY = e.offsetY
    })
    return mouse
}