import screen from './screen.js'
import tick from './tick.js'
import {load_image, load_json} from './load.js'
import map from './map.js'
import player from './player.js'
import keyboard from './keyboard.js'
import camera from './camera.js'
import mouse from './mouse.js'


const GAME = {}
GAME.scale = 1
GAME.debug = false
GAME.dt = 1/60
GAME.resolution = {
    width: 640,
    height: 360
}

const start = async () => {
    GAME.data = await load_json(`./data/default_save.json`)
    GAME.map = await load_json(`./data/${GAME.data.current_zone}.json`)
    GAME.images = await load_image(`./images/tiles.png`)
    GAME.entities = new Map
    GAME.screen = screen(GAME)
    GAME.entities.set('map', map(GAME))
    GAME.entities.set('player', player(GAME))
    GAME.entities.set('camera', camera(GAME))
    GAME.mouse = mouse(GAME)
    GAME.keyboard = keyboard(GAME)
    GAME.tick = tick(GAME)
    GAME.tick()
}

start()