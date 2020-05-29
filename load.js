export function load_image(url){
    return new Promise(resolve => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.src = url
    })
}

export function load_json(path){
    return fetch(path)
        .then(r => r.json())
}