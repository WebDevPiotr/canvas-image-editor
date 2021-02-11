import RenderableElement from "App/Abstract/RenderableElement";
import AbstractRenderStrategy from "../AbstractRenderStrategy";

class CircleRenderStrategy extends AbstractRenderStrategy {

    execute(context: CanvasRenderingContext2D, element: RenderableElement) {
        context.beginPath();
        context.arc(element.position.x, element.position.y, element.size.width, 0, 2 * Math.PI)
        context.stroke();
    }

}

export default CircleRenderStrategy