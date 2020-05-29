export default (screen, entities) => {
    screen.repaint()
    entities.forEach(entity => {
        if (entity.render) entity.render(screen.ctx)
    })
}