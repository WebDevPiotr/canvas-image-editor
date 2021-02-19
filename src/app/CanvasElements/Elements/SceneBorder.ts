import RenderableElement from 'App/CanvasElements/Abstract/RenderableElement'
import CanvasElementTypes from '../CanvasElementsTypes'

class SceneBorder extends RenderableElement {

    constructor(private _image: HTMLImageElement) {
        super(CanvasElementTypes.Border)
        this.originalSize = { width: _image.width, height: _image.height }
        this.size = { width: _image.width, height: _image.height }
    }

    get image() { return this._image }

}

export default SceneBorder