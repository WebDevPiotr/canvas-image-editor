import SceneBackground from "App/CanvasElements/SceneBackground";
import RenderStrategy from "../RenderStrategy";

class BackgroundRenderStrategy extends RenderStrategy {

    public execute(context: CanvasRenderingContext2D, background: SceneBackground) {
        super.execute(context, background)
        let offsetX: number = context.canvas.width / 2
        let offsetY: number = context.canvas.height / 2
        context.save()
        context.translate(offsetX, offsetY)
        context.drawImage(background.image, -background.size.width / 2, -background.size.height / 2, background.size.width, background.size.height)
        context.restore()
    }

}

export default BackgroundRenderStrategy