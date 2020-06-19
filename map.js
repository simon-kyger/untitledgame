import entity from './entity.js'

export default GAME => {
    const buffer = document.createElement('canvas')
    buffer.width = GAME.map.width * GAME.map.tilewidth * GAME.settings.scale
    buffer.height = GAME.map.height * GAME.map.tileheight * GAME.settings.scale
    const ctx = buffer.getContext('2d')
    ctx.scale(GAME.scale, GAME.scale)
    ctx.imageSmoothingEnabled = false
    ctx.webkitImageSmoothingEnabled = false
    ctx.mozImageSmoothingEnabled = false
    const size = GAME.map.tilewidth
    GAME.map.layers.forEach(layer => {
        layer.data.forEach((tile_id, i) => {
            tile_id-- //required because tiled generates the arrays as 1 based instead of 0
            const tile = GAME.map.tilesets[0]
            const x = Math.floor((tile_id % (tile.imagewidth / size))) * size
            const y = Math.floor(tile_id / (tile.imagewidth / size)) * size
            const sx = Math.floor(i % layer.width) * size
            const sy = Math.floor(i / layer.width) * size
            ctx.drawImage(
                GAME.images,
                x,
                y,
                size,
                size,
                sx,
                sy,
                size,
                size
            )
        })
    })
    const e = entity(1)
    e.image = buffer
    e.width = buffer.width
    e.height = buffer.height
    e.x = 0
    e.y = 0
    return e
}