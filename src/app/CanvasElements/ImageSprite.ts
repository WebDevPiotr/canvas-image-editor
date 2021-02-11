import MoveableElement from 'App/Abstract/MoveableElement'
import Vector from 'Utils/VectorUtils'
import CanvasElementTypes from './CanvasElementsTypes'
import SelectionIndicator from './SelectionIndicator/SelectionIndicator'

class ImageSprite extends MoveableElement {

    constructor(private _image: HTMLImageElement) {
        super(CanvasElementTypes.Image)
        this.originalSize = { width: _image.width, height: _image.height }
        this.size = { width: _image.width, height: _image.height }
        this.position = new Vector(this.size.width / 2, this.size.height / 2)
        this.selectionIndicator = SelectionIndicator.fromElement(this)
    }

    get image() { return this._image }

}

export default ImageSprite