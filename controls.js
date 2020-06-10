
export default GAME => {
    const controls = GAME.data.controls
    controls.set = function(key, newkey){
        if (Object.keys(this).filter(e => e == key).length)
            this[key] = newkey 
        else throw Exception(`unkown key ${key}`)
    }
    window.addEventListener('keydown', e => {
        const key = Object.values(controls).filter(o => o.key == e.key)[0]
        if (key) key.state = true
    })
    window.addEventListener('keyup', e => {
        const key = Object.values(controls).filter(o => o.key == e.key)[0]
        if (key) key.state = false
    })
    window.addEventListener('blur', () => {
        Object.values(controls).filter(o => o.state = false)
    })
    GAME.screen.image.addEventListener('mousedown', e => {
        const m = GAME.controls.mouse
        switch (e.button) {
            case 0:
                break;
            case 2:
                const camera = GAME.entities.get('camera')
                const screen_style = GAME.screen.image.style
                const resolution = GAME.resolution
                const x = Math.round(e.offsetX / screen_style.width.slice(0, -2) * resolution.width + camera.x)
                const y = Math.round(e.offsetY / screen_style.height.slice(0, -2) * resolution.height + camera.y)
                GAME.entities.get('player').set_destination(x, y)
                break;
        }
    })
    return controls
}