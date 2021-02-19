import MoveableElement from 'App/CanvasElements/Abstract/MoveableElement'
import Vector from 'Utils/VectorUtils'
import CanvasElementTypes from '../CanvasElementsTypes'

class ImageSprite extends MoveableElement {

    constructor(private _image: HTMLImageElement) {
        super(CanvasElementTypes.Image)
        this.originalSize = { width: _image.width, height: _image.height }
        this.size = { width: _image.width, height: _image.height }
        this.ratio = _image.width / _image.height
        this.position = new Vector(this.size.width / 2, this.size.height / 2)
    }

    get image() { return this._image }

}

export default ImageSprite