import RenderableElement from 'App/Abstract/RenderableElement'
import CanvasElementTypes from './CanvasElementsTypes'

class SceneBackground extends RenderableElement {

    constructor(private _image: HTMLImageElement) {
        super(CanvasElementTypes.Background)
        this.originalSize = { width: _image.width, height: _image.height }
        this.size = { width: _image.width, height: _image.height }
    }

    get image() { return this._image }

}

export default SceneBackground