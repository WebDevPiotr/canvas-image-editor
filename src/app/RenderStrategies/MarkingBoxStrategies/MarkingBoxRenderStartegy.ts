import MarkingBoxState from "App/CanvasElements/MarkingBox/MarkingBoxState";
import SceneController from "App/Controller/SceneController";

class MarkingBoxRenderStrategy {

    public execute(context: CanvasRenderingContext2D, controller: SceneController) {
        const { position, size, state } = controller.markingBox
        context.save()
        context.lineWidth = 1;
        if(state === MarkingBoxState.FINAL) {
            context.setLineDash([5, 10]);
            context.strokeStyle = "rgba(0, 0, 255, 1)"
        }
        if(state === MarkingBoxState.RESIZING){
            context.strokeStyle = "rgba(127, 205, 255, 1)"
            context.fillStyle = "rgba(127, 205, 255, 0.5)"
        }
        context.beginPath();
        context.rect(position.x, position.y, size.width, size.height);
        if(state === MarkingBoxState.RESIZING) context.fill();
        context.stroke();
        context.restore()
    }

}

export default MarkingBoxRenderStrategy