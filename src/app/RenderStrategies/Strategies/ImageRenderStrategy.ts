import ImageSprite from "App/CanvasElements/ImageSprite";
import AbstractRenderStrategy from "../AbstractRenderStrategy";
class ImageRenderStrategy extends AbstractRenderStrategy {

    execute(context: CanvasRenderingContext2D, element: ImageSprite) {
        const { position, size, rotation, image } = element
        super.execute(context, element)
        context.save()
        context.translate(position.x, position.y);
        context.rotate(rotation);
        context.drawImage(image, -size.width / 2, -size.height / 2, size.width, size.height)
        context.restore()
    }

}

export default ImageRenderStrategy