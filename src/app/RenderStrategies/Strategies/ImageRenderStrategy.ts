import ImageSprite from "App/CanvasElements/Elements/ImageSprite";
import AbstractRenderStrategy from "../AbstractRenderStrategy";
class ImageRenderStrategy extends AbstractRenderStrategy {

    execute(context: CanvasRenderingContext2D, element: ImageSprite) {
        super.execute(context, element)
        const { position, size, originalSize, rotation, image } = element
        context.save()
        context.translate(position.x, position.y);
        context.rotate(rotation);
        context.drawImage(image, 0,0, originalSize.width, originalSize.height, -size.width / 2, -size.height / 2, size.width, size.height)
        context.restore()
    }

}

export default ImageRenderStrategy