import SceneController from 'App/Controller/SceneController';
import Vector from 'Utils/VectorUtils';
import IMouseMoveStrategy from '../IMouseMoveStrategy'

class MarkingStrategy implements IMouseMoveStrategy {

    public execute(mousePosiition: Vector, controller: SceneController) {
        controller.markingBox.resize(mousePosiition)
    }
}

export default MarkingStrategy