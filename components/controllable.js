export default GAME => {
    return entity => {
        const k = GAME.keyboard
        if (k.up.state)
            entity.y -= entity.speed * GAME.dt
        if (k.down.state)
            entity.y += entity.speed * GAME.dt
        if (k.left.state)
            entity.x -= entity.speed * GAME.dt
        if (k.right.state)
            entity.x += entity.speed * GAME.dt
    }
}