export default (image, x = 0, y = 0, width = 100, height = 100) => {
    return {
        image: image,
        x: x,
        y: y,
        width: width,
        height: height,
        update: function(dt) {
        },
        render: function(ctx){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        }
    }
}