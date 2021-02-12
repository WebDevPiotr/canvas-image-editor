import SceneController from 'App/Controller/SceneController';
import IMouseDownStrategy from '../IMouseDownStrategy'
import { Scene, CanvasRenderer } from 'App/Core'
import MoveableElement from 'App/Abstract/MoveableElement'
import Vector from 'Utils/VectorUtils'
import ControllerModeType from 'App/Controller/ControllerModeType';

class ElementSelectStrategy implements IMouseDownStrategy {

    public execute(clickedElement: MoveableElement, mousePosition: Vector, controller: SceneController) {
        if(controller.selectedElement) controller.selectedElement.deselect()
        clickedElement.select(mousePosition)
        controller.selectedElement = clickedElement
        controller.mode = ControllerModeType.SELECTED
        CanvasRenderer.getInstance().render(Scene.getInstance())
    }
}

export default ElementSelectStrategy