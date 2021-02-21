import MoveableElement from 'App/CanvasElements/Abstract/MoveableElement'
import RenderableElement from 'App/CanvasElements/Abstract/RenderableElement'
import SelectionBorderRenderStrategy from "./SelectionBorderRenderStrategy";
import CanvasElementsTypes from 'App/CanvasElements/CanvasElementsTypes'
import ResizeIndicatorRenderStrategy from './ResizeIndicatorRenderStrategy'
import RotationIndicatorRenderStrategy from './RotationIndicatorRenderStrategy'
import SceneController from "App/Controller/SceneController";

class SelectionRenderStartegy {

    public execute(context: CanvasRenderingContext2D, controller: SceneController, scale: number) {
        const { selectedElement, selectionIndicator } = controller
        context.save()
        this.drawBorder(context, selectedElement)
        selectionIndicator.elements.forEach(indicator => this.drawIndicator(context, indicator, selectedElement, scale))
        context.restore()
    }

    private drawBorder(context: CanvasRenderingContext2D, element: MoveableElement) {
        new SelectionBorderRenderStrategy().execute(context, element)
    }

    private drawIndicator(context: CanvasRenderingContext2D, indicator: RenderableElement, element: RenderableElement, scale: number) {
        if (indicator.type === CanvasElementsTypes.RotationIndicator)
            new RotationIndicatorRenderStrategy().execute(context, indicator, element, scale)
        else
            new ResizeIndicatorRenderStrategy().execute(context, indicator, element, scale)
    }
}

export default SelectionRenderStartegy