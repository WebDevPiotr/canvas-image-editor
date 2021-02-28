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

    public draw(context: CanvasRenderingContext2D, element: RenderableElement, scale: number) {
        const { position: ePos, rotation: eRot } = element
        const { position: iPos, size: iSize } = this
        context.save()
        context.lineWidth = 1;
        context.strokeStyle = "blue"
        context.fillStyle = "blue"
        context.translate(ePos.x, ePos.y);
        context.rotate(eRot);
        context.beginPath();
        context.arc(iPos.x, iPos.y, iSize.width * scale / 2, 0, 2 * Math.PI)
        context.fill();
        context.stroke();
        context.restore()
    }

}

export default ResizeIndicator