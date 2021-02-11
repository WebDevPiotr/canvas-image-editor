import ImageSprite from "App/CanvasElements/ImageSprite";
import AbstractRenderStrategy from "../AbstractRenderStrategy";
class ImageRenderStrategy extends AbstractRenderStrategy {

    execute(context: CanvasRenderingContext2D, image: ImageSprite) {
        super.execute(context, image)
        context.drawImage(image.image, -image.size.width / 2 + image.position.x, -image.size.height / 2 + image.position.y, image.size.width, image.size.height)
    }

}

export default ImageRenderStrategy