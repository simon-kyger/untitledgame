import entity from './entity.js'
export default GAME => {
    const keyboard = entity()
    Object.assign(keyboard, GAME.settings.controls.keyboard)
    keyboard.set = function(key, newkey){
        if (Object.keys(this).filter(e => e == key).length)
            this[key] = newkey 
        else throw Exception(`unkown key ${key}`)
    }
    window.addEventListener('keydown', e => {
        const key = Object.values(keyboard).filter(o => o.key == e.key)[0]
        if (key) key.state = true
    })
    window.addEventListener('keyup', e => {
        const key = Object.values(keyboard).filter(o => o.key == e.key)[0]
        if (key) key.state = false
    })
    return keyboard
}