export default (dt = 1/60, entities) => {
    entities.forEach(entity => {
        if (entity.update) entity.update(dt)
    })
} 
