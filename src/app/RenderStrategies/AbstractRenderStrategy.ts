import RenderableElement from '../CanvasElements/Abstract/RenderableElement'
import IRenderStrategy from './IRenderStartegy'

abstract class AbstractRenderStrategy implements IRenderStrategy {

    public execute(context: CanvasRenderingContext2D, element: RenderableElement) {
        this.resizeToFitCanvas(context, element)
    }

    private resizeToFitCanvas(context: CanvasRenderingContext2D, element: RenderableElement) {
        let widthRatio = element.size.width / context.canvas.width
        let heightRatio = element.size.height / context.canvas.height
        if (widthRatio > 1 || heightRatio > 1) {
            let scale = Math.max(widthRatio, heightRatio)
            element.size = {
                width: Math.floor(element.originalSize.width / scale),
                height: Math.floor(element.originalSize.height / scale)
            }
        }
    }

}

export default AbstractRenderStrategy