import RenderableElement from 'App/CanvasElements/Abstract/RenderableElement'
import Vector from 'Utils/VectorUtils'
import CanvasElementsTypes from '../CanvasElementsTypes'

class RotationIndicator extends RenderableElement {

    constructor(position: Vector) {
        super(CanvasElementsTypes.RotationIndicator)
        this.position = position
        this.size = { width: 10, height: 10 }
        this.originalSize = { width: 10, height: 10 }
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
        context.translate(iPos.x, iPos.y)
        context.beginPath();
        context.rect(-iSize.width * scale / 2, -iSize.height * scale / 2, iSize.width * scale, iSize.height * scale);
        context.fill();
        context.stroke();
        context.restore()
    }

}

export default RotationIndicator