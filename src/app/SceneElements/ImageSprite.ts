import Moveable from 'App/AbstractObjects/Moveable'

class ImageSprite extends Moveable {

    constructor(image: HTMLImageElement) {
        super(image)
    }

    public draw(context: CanvasRenderingContext2D) {
        if (this.position.x < this.size.width / 2) this.position.x = this.size.width / 2
        if (this.position.y < this.size.height / 2) this.position.y = this.size.height / 2
        context.drawImage(this.image, -this.size.width / 2 + this.position.x, -this.size.height / 2 + this.position.y, this.size.width, this.size.height)

        if (this._isSelected) this.drawSelectionBorder(context)
    }

}

export default ImageSprite