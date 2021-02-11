import IRenderStrategy from "../IRenderStartegy";
import MoveableElement from 'App/Abstract/MoveableElement'
import RenderableElement from 'App/Abstract/RenderableElement'
import CircleRenderStrategy from "../Strategies/CircleRenderStrategy";
import RectangleRenderStrategy from "../Strategies/RectangleRenderStrategy";
import RenderStrategyProvider from "../RenderStrategyProvider";

class SelectionDecorator implements IRenderStrategy {

    constructor(private strategy: IRenderStrategy) { }

    public execute(context: CanvasRenderingContext2D, element: MoveableElement) {
        this.strategy.execute(context, element)
        context.save();
        context.lineWidth = 1;
        context.strokeStyle = "red";
        this.drawBorder(context, element)
        context.lineWidth = 1.5;
        context.strokeStyle = "green"
        element.selectionIndicator.elements.forEach(element => this.drawIndicator(context, element))
        context.restore()
    }

    private drawBorder(context: CanvasRenderingContext2D, element: MoveableElement) {
        new RectangleRenderStrategy().execute(context, element)
    }

    private drawIndicator(context: CanvasRenderingContext2D, element: RenderableElement) {
        RenderStrategyProvider.get(element.type).execute(context, element)
    }
}

export default SelectionDecorator