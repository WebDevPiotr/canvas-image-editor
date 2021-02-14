import { ElementSource } from "App/Types"

class ImageLoader {

    static async load(source: ElementSource) {
        switch (typeof source) {
            case 'string':
                return this.loadFromUrl(source)
            case 'object':
                return this.loadFromFile(source)
        }
    }

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