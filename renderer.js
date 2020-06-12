export default GAME => {
    const screen = GAME.entities.get('screen')
    const player = GAME.entities.get('player')
    const ctx = screen.image.getContext('2d')
    ctx.translate(-GAME.entities.get('camera').x, -GAME.entities.get('camera').y)   
    GAME.entities.forEach(entity => entity?.render?.(ctx))
    ctx.setTransform(1, 0, 0, 1, 0, 0)
}