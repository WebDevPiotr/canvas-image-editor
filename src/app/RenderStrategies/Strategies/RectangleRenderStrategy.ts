import RenderableElement from "App/Abstract/RenderableElement";
import AbstractRenderStrategy from "../AbstractRenderStrategy";

class RectangleRenderStrategy extends AbstractRenderStrategy {

    execute(context: CanvasRenderingContext2D, element: RenderableElement) {
        context.beginPath();
        context.rect(
            element.position.x - element.size.width / 2,
            element.position.y - element.size.height / 2,
            element.size.width,
            element.size.height
        );
        context.stroke();
    }

}

export default RectangleRenderStrategy