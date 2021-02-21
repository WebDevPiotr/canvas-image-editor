import RenderableElement from "App/CanvasElements/Abstract/RenderableElement";

class RotationIndicatorRenderStrategy {

    execute(context: CanvasRenderingContext2D, indicator: RenderableElement, element: RenderableElement, scale: number) {
        const { position: ePos, rotation: eRot } = element
        const { position: iPos, size: iSize } = indicator
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

export default RotationIndicatorRenderStrategy