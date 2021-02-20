import ControllerModeType from 'App/Controller/ControllerModeType';
import SceneController from 'App/Controller/SceneController';
import IMouseUpStrategy from '../IMouseUpStrategy'

class BackToSelectStrategy implements IMouseUpStrategy {

    public execute(controller: SceneController) {
        controller.mode = ControllerModeType.SELECTED
    }
}

export default BackToSelectStrategy