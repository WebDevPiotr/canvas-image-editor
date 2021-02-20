import SceneController from "App/Controller/SceneController";
import IKeyDownStrategy from "../IKeyDownStrategy";

class DeleteStrategy implements IKeyDownStrategy {

    execute(controller: SceneController) {
        const { selectedElement, scene, renderer } = controller
        scene.removeLayer(selectedElement)
        controller.selectedElement = null
        controller.selectionIndicator = null
        renderer.render(scene, controller)
    }
}

export default DeleteStrategy