import SceneBackground from "App/CanvasElements/Elements/SceneBackground";
import AbstractRenderStrategy from "../AbstractRenderStrategy";
class BackgroundRenderStrategy extends AbstractRenderStrategy {

    public execute(context: CanvasRenderingContext2D, background: SceneBackground) {
        super.execute(context, background)
        let canvas = context.canvas
        if (canvas.width > background.size.width) canvas.width = background.size.width
        if (canvas.height > background.size.height) canvas.height = background.size.height
        context.save()
        context.translate(canvas.width / 2, canvas.height / 2)
        context.drawImage(background.image, -background.size.width / 2, -background.size.height / 2, background.size.width, background.size.height)
        context.restore()
    }

}

export default BackgroundRenderStrategy