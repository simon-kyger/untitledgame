import entity from './entity.js'
import map from './map.js'

export default GAME => {
    const mouse = GAME.settings.controls.mouse
    const map = GAME.entities.get('map')
    const camera = GAME.entities.get('camera')
    const screen = GAME.entities.get('screen')
    const resolution = GAME.settings.resolution
    mouse.x = mouse.y = mouse.offsetX = mouse.offsetY = 0
    mouse.set = function(key, newkey){
        if (Object.keys(this).filter(e => e == key).length)
            this[key] = newkey 
        else throw new Exception(`unkown key ${key}`)
    }
    mouse.update = function(){
        const x = Math.floor(this.offsetX / screen.image.style_width * resolution.width + camera.x)
        const y = Math.floor(this.offsetY / screen.image.style_height * resolution.height + camera.y)
        this.x = x < 0 ? 0 : x > map.width ? map.width : x
        this.y = y < 0 ? 0 : y > map.height ? map.height : y
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
    screen.image.onmouseout = function(e){
        mouse.lmb.state = false
        mouse.rmb.state = false
        camera.remove_component('follow_target')
        camera.target.set_destination(camera.target.x, camera.target.y)
    }
    screen.image.onmouseover = function(e){
        camera.add_component('follow_target')
    }
    return mouse
}