import RenderableElement from "App/CanvasElements/Abstract/RenderableElement";
import IRenderStrategy from '../IRenderStartegy';

class SelectionBorderRenderStrategy implements IRenderStrategy {

    execute(context: CanvasRenderingContext2D, element: RenderableElement) {
        const { position, size, rotation } = element
        context.save()
        context.translate(position.x, position.y);
        context.rotate(rotation);
        context.beginPath();
        context.rect(-size.width / 2, -size.height / 2, size.width, size.height);
        context.stroke();
        context.restore()
    }

}

export default SelectionBorderRenderStrategy