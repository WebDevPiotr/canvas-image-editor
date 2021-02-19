import IRenderStrategy from "../IRenderStartegy";
import MoveableElement from 'App/CanvasElements/Abstract/MoveableElement'
import RenderableElement from 'App/CanvasElements/Abstract/RenderableElement'
import SelectionBorderRenderStrategy from "./SelectionBorderRenderStrategy";
import CanvasElementsTypes from 'App/CanvasElements/CanvasElementsTypes'
import ResizeIndicatorRenderStrategy from './ResizeIndicatorRenderStrategy'
import RotationIndicatorRenderStrategy from './RotationIndicatorRenderStrategy'
import SceneController from "App/Controller/SceneController";

class SelectionDecorator {

    public execute(context: CanvasRenderingContext2D, controller: SceneController) {
        const { selectedElement, selectionIndicator } = controller
        context.save()
        context.lineWidth = 3;
        context.strokeStyle = "#90EE90";
        this.drawBorder(context, selectedElement)
        context.lineWidth = 1;
        context.strokeStyle = "blue"
        context.fillStyle = "blue"
        selectionIndicator.elements.forEach(indicator => this.drawIndicator(context, indicator, selectedElement))
        context.restore()
    }

    private drawBorder(context: CanvasRenderingContext2D, element: MoveableElement) {
        new SelectionBorderRenderStrategy().execute(context, element)
    }

    private drawIndicator(context: CanvasRenderingContext2D, indicator: RenderableElement, element: RenderableElement) {
        if (indicator.type === CanvasElementsTypes.RotationIndicator)
            new RotationIndicatorRenderStrategy().execute(context, indicator, element)
        else
            new ResizeIndicatorRenderStrategy().execute(context, indicator, element)
    }
}

export default SelectionDecorator