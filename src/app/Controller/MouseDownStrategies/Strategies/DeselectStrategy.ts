import SceneController from 'App/Controller/SceneController';
import IMouseDownStrategy from '../IMouseDownStrategy'
import ControllerModeType from 'App/Controller/ControllerModeType';
import { Intersection } from 'App/Types';

class DeselectStrategy implements IMouseDownStrategy {

    public execute(intersection: Intersection, controller: SceneController) {
        if(controller.selectedElement) controller.selectedElement.deselect()
        controller.selectedElement = null
        controller.mode = ControllerModeType.UNSELECTED
    }
}

export default DeselectStrategy