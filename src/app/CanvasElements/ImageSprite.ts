import MoveableElement from 'App/Abstract/MoveableElement'
import CanvasElementTypes from './CanvasElementsTypes'

class ImageSprite extends MoveableElement {

    constructor(private _image: HTMLImageElement) {
        super()
        this.originalSize = { width: _image.width, height: _image.height }
        this.type = CanvasElementTypes.Image
    }

    get image() { return this._image }

}

export default ImageSprite