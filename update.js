export default GAME => {
    if (GAME.paused){
        GAME.entities.get('ui').update(GAME)
        return
    }
    GAME.entities.forEach(entity => {
        entity?.update?.(GAME)
    })
} 
