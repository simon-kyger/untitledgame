export default {
    rfp: function(min = 0, max = 50){
        return Math.random() * (max - min + 1) + min
    },
    rint: function(min = 0, max = 50){
        return this.rfp(min, max) | 0
    },
    rnegate: function(num){
        return Math.random() > .5 ? num : num * -1
    }
}