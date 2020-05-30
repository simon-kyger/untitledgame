export default (screen, entities) => {
    entities.forEach(entity => {
        entity?.render?.(screen.image.getContext('2d'))
    })
}