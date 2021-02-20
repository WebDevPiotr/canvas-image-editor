import SceneController from 'App/Controller/SceneController';
import IMouseDownStrategy from '../IMouseDownStrategy'
import { Intersection } from 'App/Types';
import MarkingBox from 'App/CanvasElements/MarkingBox/MarkingBox';

class MarkingStrategy implements IMouseDownStrategy {

    public execute(intersection: Intersection, controller: SceneController) {
        if (controller.selectedElement) controller.selectedElement.deselect()
        controller.selectedElement = null
        controller.markingBox = new MarkingBox(intersection.position)
    }
}

export default MarkingStrategy