import SceneController from 'App/Controller/SceneController';
import Vector from 'Utils/VectorUtils';
import IMouseMoveStrategy from '../IMouseMoveStrategy'

class Resizetrategy implements IMouseMoveStrategy {

    public execute(mousePosition: Vector, controller: SceneController) {
        const { position, rotation } = controller.selectedElement
        let mousePosInElementCoord = mousePosition.clone().rotateAboutOrigin(position, -rotation)
        controller.selectedElement.resize(mousePosInElementCoord, controller.mode)
    }
}

export default Resizetrategy