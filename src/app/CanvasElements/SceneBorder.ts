import Element from 'App/Abstract/Element'
import CanvasElementTypes from './CanvasElementsTypes'

class SceneBorder extends Element {

    constructor(private _image: HTMLImageElement) {
        super()
        this.originalSize = { width: _image.width, height: _image.height }
        this.type = CanvasElementTypes.Border
    }

    get image() { return this._image }

}

export default SceneBorder