export default GAME => {
    return function(entity){
        const map = GAME.entities.get('map')
        if (entity.x < 0) entity.x = 0
        if (entity.y < 0) entity.y = 0
        if (entity.x > map.width - entity.width)
            entity.x = map.width - entity.width
        if (entity.y > map.height - entity.height)
            entity.y = map.height - entity.height
        entity.x = Math.floor(entity.x)
        entity.y = Math.floor(entity.y)
    }
}