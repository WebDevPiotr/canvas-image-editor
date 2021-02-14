import SceneController from 'App/Controller/SceneController';
import IMouseDownStrategy from '../IMouseDownStrategy'
import ControllerModeType from 'App/Controller/ControllerModeType';
import { Intersection } from 'App/Types';

class RotationStrategy implements IMouseDownStrategy {

    public execute(intersection: Intersection, controller: SceneController) {
        controller.mode = ControllerModeType.ROTATING
    }
}

export default RotationStrategy