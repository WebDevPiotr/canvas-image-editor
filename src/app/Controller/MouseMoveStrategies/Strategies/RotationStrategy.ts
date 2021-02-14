import SceneController from 'App/Controller/SceneController';
import Vector from 'Utils/VectorUtils';
import IMouseMoveStrategy from '../IMouseMoveStrategy'

class RotationStrategy implements IMouseMoveStrategy {

    public execute(mousePosiition: Vector, controller: SceneController) {
        controller.selectedElement.rotate(mousePosiition)
    }
}

export default RotationStrategy