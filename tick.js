import renderer from './renderer.js'
import update from './update.js'
import calc_fps from './calc_fps.js'

export default GAME => {
    let last_time = 0
    let frame_time = 0
    return function tick(time = 0) {
        if (GAME.debug) calc_fps()
        frame_time += (time - last_time) / 1000
        if (frame_time > 200) frame_time = 200
        while (frame_time > GAME.dt){
            update(GAME)
            frame_time -= GAME.dt
        }
        renderer(GAME)
        last_time = time
        //setTimeout(tick, 1000/500, performance.now())
        requestAnimationFrame(tick)
    }
}