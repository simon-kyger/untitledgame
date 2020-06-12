import entity from './entity.js'

export default GAME => {
    const mouse = GAME.settings.controls.mouse
    const player = GAME.entities.get('player')
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
        this.x = Math.floor(this.offsetX / screen.image.style_width * resolution.width + camera.x)
        this.y = Math.floor(this.offsetY / screen.image.style_height * resolution.height + camera.y)
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
    window.onmouseout = function(e){
        if(e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight){

            mouse.lmb.state = false
            mouse.rmb.state = false
            mouse.x = player.x
            mouse.y = player.y
            player.set_destination(player.x, player.y)
            camera.lock_target = true
        }
    }
    return mouse
}