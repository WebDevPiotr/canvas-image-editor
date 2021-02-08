import Element from 'App/Abstract/Element'
import CanvasElementTypes from './CanvasElementsTypes'

class SceneBackground extends Element {

    constructor(private _image: HTMLImageElement) {
        super()
        this.originalSize = { width: _image.width, height: _image.height }
        this.type = CanvasElementTypes.Background
    }

    get image() { return this._image }

}

export default SceneBackground