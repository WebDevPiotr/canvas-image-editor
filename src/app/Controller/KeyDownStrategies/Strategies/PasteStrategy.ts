import ControllerModeType from "App/Controller/ControllerModeType";
import SceneController from "App/Controller/SceneController";
import IKeyDownStrategy from "../IKeyDownStrategy";

class PasteStrategy implements IKeyDownStrategy {

    async execute(controller: SceneController) {
        const { clipBoard, scene, renderer } = controller
        await scene.addToScene(clipBoard.read())
        controller.mode = ControllerModeType.UNSELECTED
        renderer.render(controller.scene, controller)
    }
}

export default PasteStrategy