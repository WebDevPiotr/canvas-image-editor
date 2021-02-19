import RenderableElement from "App/CanvasElements/Abstract/RenderableElement";

class RotationIndicatorRenderStrategy {

    execute(context: CanvasRenderingContext2D, indicator: RenderableElement, element: RenderableElement) {
        const { position: ePos, rotation: eRot } = element
        const { position: iPos, size: iSize } = indicator
        context.save()
        context.translate(ePos.x, ePos.y);
        context.rotate(eRot);
        context.translate(iPos.x, iPos.y)
        context.beginPath();
        context.rect(-iSize.width / 2, -iSize.height / 2, iSize.width, iSize.height);
        context.fill();
        context.stroke();
        context.restore()
    }

}

export default RotationIndicatorRenderStrategy