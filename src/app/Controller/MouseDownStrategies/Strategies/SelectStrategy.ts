import SceneController from 'App/Controller/SceneController';
import IMouseDownStrategy from '../IMouseDownStrategy'
import MoveableElement from 'App/CanvasElements/Abstract/MoveableElement'
import ControllerModeType from 'App/Controller/ControllerModeType';
import { Intersection } from 'App/Types';
import SelectionIndicator from 'App/CanvasElements/SelectionIndicator/SelectionIndicator';

class SelectStrategy implements IMouseDownStrategy {

    public execute(intersection: Intersection, controller: SceneController) {
        let element = intersection.element as MoveableElement
        if (controller.selectedElement && controller.selectedElement.id === element.id) {
            element.select(intersection.position)
            controller.mode = ControllerModeType.MOVING
        }
        else {
            if (controller.selectedElement) controller.selectedElement.deselect()
            element.select(intersection.position)
            controller.selectedElement = element
            controller.selectionIndicator = SelectionIndicator.fromElement(element)
            controller.mode = ControllerModeType.SELECTED
        }
    }
}

export default SelectStrategy