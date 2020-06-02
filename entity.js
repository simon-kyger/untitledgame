import * as components from './components/index.js'

export default (image, x = 0, y = 0, width = 100, height = 100) => {
    return {
        image: image,
        x: x,
        y: y,
        width: width,
        height: height,
        components: new Map,
        add_component: function(component){
            if (typeof components[component] === 'undefined')
                throw new Exception(`unknown component: ${component}`)
            this.components.set(component, components[component].bind(this))
        },
        remove_component: function(component){
            if (typeof this.components.get(component) === 'undefined'){
                console.warn(`attempted to remove component which did not exist on: ${this}`, 
                            `component: ${component}`)
                return
            }
            this.components.delete(component)
        },
        update: function(GAME) {
            this.components.forEach(component => {
                component(GAME)
            })
        },
        render: function(ctx){
            if (this.image)
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        }
    }
}