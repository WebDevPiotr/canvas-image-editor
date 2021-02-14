import IRenderStrategy from "../IRenderStartegy";
import MoveableElement from 'App/CanvasElements/Abstract/MoveableElement'
import RenderableElement from 'App/CanvasElements/Abstract/RenderableElement'
import SelectionBorderRenderStrategy from "./SelectionBorderRenderStrategy";
import CanvasElementTypes from "App/CanvasElements/CanvasElementsTypes";
import ResizeIndicatorRenderStrategy from './ResizeIndicatorRenderStrategy'
import RotationIndicatorRenderStrategy from './RotationIndicatorRenderStrategy'

class SelectionDecorator implements IRenderStrategy {

    constructor(private strategy: IRenderStrategy) { }

    public execute(context: CanvasRenderingContext2D, element: MoveableElement) {
        this.strategy.execute(context, element)
        context.save()
        context.lineWidth = 3;
        context.strokeStyle = "#90EE90";
        this.drawBorder(context, element)
        context.lineWidth = 1;
        context.strokeStyle = "blue"
        context.fillStyle = "blue"
        element.selectionIndicator.elements.forEach(indicator => this.drawIndicator(context, indicator, element))
        context.restore()
    }

    private drawBorder(context: CanvasRenderingContext2D, element: MoveableElement) {
        new SelectionBorderRenderStrategy().execute(context, element)
    }

    private drawIndicator(context: CanvasRenderingContext2D, indicator: RenderableElement, element: RenderableElement) {
        if ([CanvasElementTypes.SideIndicator, CanvasElementTypes.CornerIndicator].includes(indicator.type))
            new ResizeIndicatorRenderStrategy().execute(context, indicator, element)
        if (indicator.type === CanvasElementTypes.RotationIndicator)
            new RotationIndicatorRenderStrategy().execute(context, indicator, element)
    }
}

export default SelectionDecorator