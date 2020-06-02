export default GAME => {
    GAME.entities.forEach(entity => {
        if (entity.update) entity.update(GAME)
    })
} 
