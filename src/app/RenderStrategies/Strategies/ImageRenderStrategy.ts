import ImageSprite from "App/CanvasElements/ImageSprite";
import RenderStrategy from "../RenderStrategy";

class ImageRenderStrategy extends RenderStrategy {

    execute(context: CanvasRenderingContext2D, image: ImageSprite) {
        super.execute(context, image)
        if (image.position.x < image.size.width / 2) image.position.x = image.size.width / 2
        if (image.position.y < image.size.height / 2) image.position.y = image.size.height / 2
        context.drawImage(image.image, -image.size.width / 2 + image.position.x, -image.size.height / 2 + image.position.y, image.size.width, image.size.height)
    }

}

export default ImageRenderStrategy