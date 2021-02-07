
class ImageLoader {

    static async loadFromUrl(url: string): Promise<HTMLImageElement> {
        return new Promise(resolve => {
            const image = new Image()
            image.src = url
            image.addEventListener('load', () => resolve(image))
        })
    }

    static async loadFromFile(file: File): Promise<HTMLImageElement> {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.addEventListener('load', e => {
                const image = new Image()
                image.src = e.target.result as string
                image.addEventListener('load', () => resolve(image))
            })
            reader.readAsDataURL(file);
        })
    }

}

export default ImageLoader