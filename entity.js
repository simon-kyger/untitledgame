import * as components from './components/index.js'

export default (image, x = 0, y = 0, width = 100, height = 100) => {
    return {
        image: image,
        x: x,
        y: y,
        width: width,
        height: height,
        components: new Map,
        add_component: function(component, GAME){
            this.components.set(component, components[component](GAME))
        },
        remove_component: function(component){
            this.components.delete(component)
        },
        update: function(dt) {
            this.components.forEach(component => component(this))
        },
        render: function(ctx){
            if (this.image)
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        }
    }
}