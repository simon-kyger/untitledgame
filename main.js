import screen from './screen.js'
import tick from './tick.js'
import {load_image, load_json} from './load.js'
import map from './map.js'
import player from './player.js'
import keyboard from './keyboard.js'


const GAME = {}
GAME.scale = 4
GAME.debug = false
GAME.screen = screen
GAME.dt = 1/60

const start = async () => {
    GAME.data = await load_json(`./data/default_save.json`)
    GAME.map = await load_json(`./data/${GAME.data.current_zone}.json`)
    GAME.images = await load_image(`./images/tiles.png`)
    GAME.entities = new Map
    GAME.entities.set('keyboard', keyboard(GAME))
    GAME.entities.set('map', map(GAME))
    GAME.entities.set('player', player(GAME))
    tick(GAME)()
}

start()