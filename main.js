import screen from './screen.js'
import tick from './tick.js'
import {load_image, load_json} from './load.js'
import map from './map.js'
import player from './player.js'
import keyboard from './keyboard.js'
import camera from './camera.js'
import mouse from './mouse.js'
import * as ui from './ui/index.js'


const GAME = {}

const start = async () => {
    GAME.data = await load_json(`./data/default_save.json`)
    GAME.settings = await load_json(`./data/settings.json`)
    GAME.map = await load_json(`./data/${GAME.data.current_zone}.json`)
    GAME.images = await load_image(`./images/tiles.png`)
    GAME.dt = GAME.settings.dt
    GAME.entities = new Map
    GAME.entities.set('screen', screen(GAME))
    GAME.entities.set('map', map(GAME))
    GAME.entities.set('player', player(GAME))
    GAME.entities.set('camera', camera(GAME))
    GAME.entities.set('mouse', mouse(GAME))
    GAME.entities.set('keyboard', keyboard(GAME))
    GAME.entities.set('ui', ui.settings(GAME))
    GAME.tick = tick(GAME)
    GAME.tick()
}

start()