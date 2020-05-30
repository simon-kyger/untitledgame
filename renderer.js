export default (screen, entities) => {
    screen.repaint()
    entities.forEach(entity => {
        entity?.render?.(screen.ctx)
    })
}