import * as comp from './components/index.js'
let id = -1
export default () => {
    return {
        id: ++id,
        components: new Map,
        add_component: function(component){
            if (typeof comp[component] === 'undefined')
                throw new Exception(`unknown component: ${component}`)
            this.components.set(component, comp[component].bind(this))
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
                ctx.drawImage(this.image, Math.round(this.x), Math.round(this.y), this.width, this.height)
        }
    }
}