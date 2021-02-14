import RenderableElement from 'App/CanvasElements/Abstract/RenderableElement'
import Vector from 'Utils/VectorUtils'
import CanvasElementTypes from '../CanvasElementsTypes'

class RotationIndicator extends RenderableElement {

    constructor(position: Vector) {
        super(CanvasElementTypes.RotationIndicator)
        this.position = position
        this.size = { width: 10, height: 10 }
        this.originalSize = { width: 10, height: 10 }
    }

}

export default RotationIndicator