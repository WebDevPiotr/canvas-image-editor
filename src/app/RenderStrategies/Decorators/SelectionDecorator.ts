import IRenderStrategy from "../IRenderStartegy";
import MoveableElement from 'App/Abstract/MoveableElement'

class SelectionDecorator implements IRenderStrategy {

    constructor(private strategy: IRenderStrategy) { }

    public execute(context: CanvasRenderingContext2D, element: MoveableElement) {
        this.strategy.execute(context, element)
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "red";
        context.rect(
            element.position.x - element.size.width / 2,
            element.position.y - element.size.height / 2,
            element.size.width,
            element.size.height
        );
        context.stroke();
    }
}

export default SelectionDecorator