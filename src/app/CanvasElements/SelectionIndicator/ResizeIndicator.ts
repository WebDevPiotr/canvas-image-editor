import RenderableElement from 'App/Abstract/RenderableElement'
import Vector from 'Utils/VectorUtils'
import CanvasElementTypes from '../CanvasElementsTypes'

class ResizeIndicator extends RenderableElement {

    constructor(position: Vector, type: CanvasElementTypes) {
        super(type)
        this.position = position
        this.size = { width: 5, height: 5 }
        this.originalSize = { width: 5, height: 5 }
    }

}

export default ResizeIndicator