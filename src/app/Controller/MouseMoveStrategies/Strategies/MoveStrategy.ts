import SceneController from 'App/Controller/SceneController';
import Vector from 'Utils/VectorUtils';
import IMouseMoveStrategy from '../IMouseMoveStrategy'
import ControllerModeType from 'App/Controller/ControllerModeType';

class MoveStrategy implements IMouseMoveStrategy {

    public execute(mousePosiition: Vector, controller: SceneController) {
        controller.selectedElement.move(mousePosiition)
        controller.mode = ControllerModeType.MOVING
    }
}

export default MoveStrategy