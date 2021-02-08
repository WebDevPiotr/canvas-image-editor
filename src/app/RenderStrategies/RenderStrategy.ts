import Element from '../Abstract/Element'
import IRenderStrategy from './IRenderStartegy'

abstract class RenderStrategy implements IRenderStrategy {

    public execute(context: CanvasRenderingContext2D, element: Element) {
        this.resizeToFitCanvas(context, element)
    }

    private resizeToFitCanvas(context: CanvasRenderingContext2D, element: Element) {
        let widthRatio = element.originalSize.width / context.canvas.width
        let heightRatio = element.originalSize.height / context.canvas.height
        let scale = widthRatio > 1 || heightRatio > 1 ? Math.max(widthRatio, heightRatio) : 1
        element.size = {
            width: element.originalSize.width / scale,
            height: element.originalSize.height / scale
        }
    }

}

export default RenderStrategy