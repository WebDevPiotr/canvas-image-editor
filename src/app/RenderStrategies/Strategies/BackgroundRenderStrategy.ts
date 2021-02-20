import SceneBackground from "App/CanvasElements/Elements/SceneBackground";
import AbstractRenderStrategy from "../AbstractRenderStrategy";
class BackgroundRenderStrategy extends AbstractRenderStrategy {

    public execute(context: CanvasRenderingContext2D, background: SceneBackground) {
        const canvas = context.canvas
        const { originalSize, image } = background
        canvas.width = originalSize.width
        canvas.height = originalSize.height
        if(originalSize.width > originalSize.height){
            canvas.style.width = '100%'
            canvas.style.height = ''
        }
        else{
            canvas.style.height = '100%'
            canvas.style.width = ''
        }
        context.save()
        context.translate(canvas.width / 2, canvas.height / 2)
        context.drawImage(image, -originalSize.width / 2, -originalSize.height / 2, originalSize.width, originalSize.height)
        context.restore()
    }

}

export default BackgroundRenderStrategy