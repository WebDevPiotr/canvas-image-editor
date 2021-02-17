import RenderableElement from 'App/CanvasElements/Abstract/RenderableElement'
import Vector from 'Utils/VectorUtils'
import IndicatorTypes from './IndicatorTypes'

class ResizeIndicator extends RenderableElement {

    constructor(position: Vector, type: IndicatorTypes) {
        super(type)
        this.position = position
        this.size = { width: 10, height: 10 }
        this.originalSize = { width: 10, height: 10 }
    }

}

export default ResizeIndicator