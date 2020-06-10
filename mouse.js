export default GAME => {
    GAME.screen.image.addEventListener('mousedown', e => {
        const camera = GAME.entities.get('camera')
        const screen_style = GAME.screen.image.style
        const resolution = GAME.resolution
        const x = Math.round(e.offsetX / screen_style.width.slice(0, -2) * resolution.width + camera.x)
        const y = Math.round(e.offsetY / screen_style.height.slice(0, -2) * resolution.height + camera.y)
        switch (e.button) {
            case 0:
                break;
            case 2:
                GAME.entities.get('player').set_destination(x, y)
                break;
        }
    })
}