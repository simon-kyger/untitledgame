const times = []
let fps = 0

export default () => {
    const now = performance.now()
    while (times.length > 0 && times[0] <= now - 1000){
        times.shift()
    }
    times.push(now)
    fps = times.length
    console.log(`FPS:`, fps)
}