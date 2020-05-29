
export default GAME => {
    const keyboard = GAME.data.controls
    keyboard.update = function(dt){
        //console.log(this)
    }
    window.addEventListener('keydown', e=> {
        const key = Object.values(keyboard).filter(o => o.key == e.key)[0]
        if (key) key.state = true
    })
    window.addEventListener('keyup', e=> {
        const key = Object.values(keyboard).filter(o => o.key == e.key)[0]
        if (key) key.state = false
    })
    return keyboard
}