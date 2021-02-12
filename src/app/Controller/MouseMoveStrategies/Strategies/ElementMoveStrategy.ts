import SceneController from 'App/Controller/SceneController';
import Vector from 'Utils/VectorUtils';
import IMouseMoveStrategy from '../IMouseMoveStrategy'
import { Scene, CanvasRenderer } from 'App/Core'
import ControllerModeType from 'App/Controller/ControllerModeType';

class ElementMoveStrategy implements IMouseMoveStrategy {

    public execute(mousePosiition: Vector, controller: SceneController) {
        controller.selectedElement.move(mousePosiition)
        controller.mode = ControllerModeType.MOVING
        CanvasRenderer.getInstance().render(Scene.getInstance())
    }
}

export default ElementMoveStrategy