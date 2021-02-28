import MarkingBox from "App/CanvasElements/MarkingBox/MarkingBox";
import CanvasRenderer from "App/CanvasRenderer";
import SceneController from "App/Controller/SceneController";
import Scene from "App/Scene/Scene";
import IKeyDownStrategy from "../IKeyDownStrategy";

class CopyStrategy implements IKeyDownStrategy {

    execute(controller: SceneController) {
        const { clipBoard, markingBox, renderer, scene } = controller
        const imageData = this.getImageData(renderer, scene, markingBox)
        clipBoard.write(this.imageDataToDataUrl(imageData))
        console.log('copy')
    }

    private imageDataToDataUrl(imageData: ImageData): string {
        const tempCanvas = document.createElement('canvas')
        tempCanvas.width = imageData.width
        tempCanvas.height = imageData.height
        tempCanvas.getContext('2d').putImageData(imageData, 0, 0)
        return tempCanvas.toDataURL('image/jpeg')
    }

    private getImageData(renderer: CanvasRenderer, scene: Scene, markingBox: MarkingBox): ImageData{
        const { position, size } = markingBox
        const tempCanvas = document.createElement('canvas')
        tempCanvas.width = renderer.width
        tempCanvas.height = renderer.height
        console.log(renderer)
        const tempContext = tempCanvas.getContext('2d')
        tempContext.fillStyle = "white";
        tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
        CanvasRenderer.renderSceneToContext(scene, tempContext)
        return tempContext.getImageData(position.x, position.y, size.width, size.height)
    }
}

export default CopyStrategy