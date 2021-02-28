import RenderableElement from 'App/CanvasElements/Abstract/RenderableElement'
import CanvasElementTypes from '../CanvasElementsTypes'

class SceneBackground extends RenderableElement {

    constructor(private _image: HTMLImageElement) {
        super(CanvasElementTypes.Background)
        this.originalSize = { width: _image.width, height: _image.height }
        this.size = { width: _image.width, height: _image.height }
        this.ratio = _image.width / _image.height
    }

    get image() { return this._image }

    public draw(context: CanvasRenderingContext2D): void {
        const { originalSize, image } = this
        context.drawImage(image, 0, 0, originalSize.width, originalSize.height)
    }

}

export default SceneBackground