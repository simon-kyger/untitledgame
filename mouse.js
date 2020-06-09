export default GAME => {
    GAME.screen.image.oncontextmenu = () => false
    GAME.screen.image.addEventListener('mousedown', e => {
        const player = GAME.entities.get('player')
        const camera = GAME.entities.get('camera')
        //TODO: this is wrong
        const x = Math.floor(e.offsetX)
        const y = Math.floor(e.offsetY)
        console.log('x', x, 'y', y)
        switch (e.button) {
            case 0:
                player.set_destination(x, y)
                break;
            case 2:
                break;
        }
    })
}