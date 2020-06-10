export default GAME => {
    GAME.screen.image.oncontextmenu = () => false
    GAME.screen.image.addEventListener('mousedown', e => {
        const player = GAME.entities.get('player')
        const camera = GAME.entities.get('camera')
        //TODO: this is wrong
        const x = Math.floor(((e.offsetX / GAME.screen.image.style.width.slice(0, -2)) * GAME.resolution.width) + camera.x)
        const y = Math.floor(((e.offsetY / GAME.screen.image.style.height.slice(0, -2)) * GAME.resolution.height) + camera.y)
        console.log('e.offsetX', e.offsetX)
        console.log('e.offsetY', e.offsetY)
        console.log('clicked here: x', x, 'y', y)
        switch (e.button) {
            case 0:
                player.set_destination(x, y)
                break;
            case 2:
                break;
        }
    })
}