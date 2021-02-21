import SceneBackground from "App/CanvasElements/Elements/SceneBackground";
import AbstractRenderStrategy from "../AbstractRenderStrategy";
class BackgroundRenderStrategy extends AbstractRenderStrategy {

    public execute(context: CanvasRenderingContext2D, background: SceneBackground) {
        const { originalSize, image } = background
        context.drawImage(image, 0, 0, originalSize.width, originalSize.height)
    }
}

export default BackgroundRenderStrategy