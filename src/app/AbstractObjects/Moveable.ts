import Drawable from './Drawable'
import Vector from '../../utils/VectorUtils'

interface IMoveable {
    select(mousePosition: Vector): void
    move(mousePosition: Vector): void
    deselect(): void
}

abstract class Moveable extends Drawable implements IMoveable {

    private _isClickable: boolean = true
    protected _isSelected: boolean = false
    private _position: Vector = new Vector(0, 0)
    private _offset: Vector

    constructor(image: HTMLImageElement) {
        super(image)
    }

    get isClickable() { return this._isClickable }
    set isClickable(isClickable: boolean) { this._isClickable = isClickable }

    get position() { return this._position }

    public select(mousePosiition: Vector) {
        this._isSelected = true
        this._offset = mousePosiition.sub(this._position)
    }

    public move(mousePosiition: Vector) {
        this._position = mousePosiition.sub(this._offset)
    }

    public deselect() {
        this._isSelected = false
    }

    protected drawSelectionBorder(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = "red";
        context.rect(-this.size.width / 2 + this.position.x, -this.size.height / 2 + this.position.y, this.size.width, this.size.height);
        context.stroke();
    }

}

export default Moveable