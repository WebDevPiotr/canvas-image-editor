import RenderableElement from 'App/CanvasElements/Abstract/RenderableElement'
import Vector from 'Utils/VectorUtils'
import CanvasElementsTypes from '../CanvasElementsTypes'
import Placement from './Placement'
class ResizeIndicator extends RenderableElement {

    private _placement: Placement

    get placement() { return this._placement }

    constructor(position: Vector, placement: Placement) {
        super(CanvasElementsTypes.ResizeIndicator)
        this.position = position
        this.size = { width: 10, height: 10 }
        this.originalSize = { width: 10, height: 10 }
        this._placement = placement
    }

}

export default ResizeIndicator