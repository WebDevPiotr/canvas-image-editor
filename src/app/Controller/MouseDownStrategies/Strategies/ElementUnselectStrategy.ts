import SceneController from 'App/Controller/SceneController';
import IMouseDownStrategy from '../IMouseDownStrategy'
import { Scene, CanvasRenderer } from 'App/Core'
import MoveableElement from 'App/Abstract/MoveableElement'
import Vector from 'Utils/VectorUtils'
import ControllerModeType from 'App/Controller/ControllerModeType';

class ElementUnselectStrategy implements IMouseDownStrategy {

    public execute(clickedElement: MoveableElement, mousePosition: Vector, controller: SceneController) {
        controller.selectedElement.deselect()
        controller.selectedElement = null
        controller.mode = ControllerModeType.UNSELECTED
        CanvasRenderer.getInstance().render(Scene.getInstance())
    }
}

export default ElementUnselectStrategy