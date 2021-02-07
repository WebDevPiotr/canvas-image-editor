import Drawable from 'App/AbstractObjects/Drawable'

class SceneBackground extends Drawable {

    constructor(image: HTMLImageElement) {
        super(image)
    }

    public draw(context: CanvasRenderingContext2D) {
        let offsetX: number = context.canvas.width / 2
        let offsetY: number = context.canvas.height / 2
        context.save()
        context.translate(offsetX, offsetY)
        context.drawImage(this.image, -this.size.width / 2, -this.size.height / 2, this.size.width, this.size.height)
        context.restore()
    }

}

export default SceneBackground