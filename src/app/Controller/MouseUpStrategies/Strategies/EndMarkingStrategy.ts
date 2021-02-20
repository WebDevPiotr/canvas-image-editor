import SceneController from 'App/Controller/SceneController';
import IMouseUpStrategy from '../IMouseUpStrategy'

class EndMarkingStrategy implements IMouseUpStrategy {

    public execute(controller: SceneController) {
        controller.markingBox.end()
    }
}

export default EndMarkingStrategy