import RenderableElement from "App/CanvasElements/Abstract/RenderableElement";

class ResizeIndicatorRenderStrategy {

    execute(context: CanvasRenderingContext2D, indicator: RenderableElement, element: RenderableElement) {
        const { position: ePos, rotation: eRot } = element
        const { position: iPos, size: iSize } = indicator
        context.save()
        context.lineWidth = 1;
        context.strokeStyle = "blue"
        context.fillStyle = "blue"
        context.translate(ePos.x, ePos.y);
        context.rotate(eRot);
        context.beginPath();
        context.arc(iPos.x, iPos.y, iSize.width / 2, 0, 2 * Math.PI)
        context.fill();
        context.stroke();
        context.restore()
    }

}

export default ResizeIndicatorRenderStrategy