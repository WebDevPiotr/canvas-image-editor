import RenderableElement from './RenderableElement'
import Vector from 'Utils/VectorUtils'
import SelectionIndicator from 'App/CanvasElements/SelectionIndicator/SelectionIndicator'
import ControllerModeType from 'App/Controller/ControllerModeType'

interface IMoveable {
    select(mousePosition: Vector): void
    deselect(): void
    move(mousePosition: Vector): void
}

abstract class MoveableElement extends RenderableElement implements IMoveable {

    private _isClickable: boolean = true
    private _isSelected: boolean = false
    private _offset: Vector
    private _selectionIndicator: SelectionIndicator

    get isClickable() { return this._isClickable }
    set isClickable(isClickable: boolean) { this._isClickable = isClickable }

    get selectionIndicator() { return this._selectionIndicator }
    set selectionIndicator(selectionIndicator: SelectionIndicator) { this._selectionIndicator = selectionIndicator }

    get isSelected() { return this._isSelected }

    public select(mousePosiition: Vector) {
        this._isSelected = true
        this._offset = mousePosiition.sub(this.position)
    }

    public deselect() {
        this._isSelected = false
    }

    public move(mousePosiition: Vector) {
        this.position = mousePosiition.sub(this._offset)
    }

    public rotate(mousePosiition: Vector) {
        this.rotation = mousePosiition.sub(this.position).angleBetween(new Vector(0, -1))
    }

    public resize(mousePosiition: Vector, mode: ControllerModeType) {
        let delta;
        switch (mode) {
            case ControllerModeType.RESIZING_T:
                delta = this.position.y - mousePosiition.y - this.size.height / 2
                this.size.height += delta
                this.position.y -= delta / 2
                break;
            case ControllerModeType.RESIZING_B:
                delta = -this.position.y + mousePosiition.y - this.size.height / 2
                this.size.height += delta
                this.position.y += delta / 2
                break;
            case ControllerModeType.RESIZING_L:
                delta = this.position.x - mousePosiition.x - this.size.width / 2
                this.size.width += delta
                this.position.x -= delta / 2
                break;
            case ControllerModeType.RESIZING_R:
                delta = -this.position.x + mousePosiition.x - this.size.width / 2
                this.size.width += delta
                this.position.x += delta / 2
                break;
            case ControllerModeType.RESIZING_TR:
                delta = -this.position.x + mousePosiition.x - this.size.width / 2
                this.size = { width: this.size.width + delta, height: this.size.height + delta / this.ratio }
                this.position = new Vector(this.position.x + delta / 2, this.position.y - delta / this.ratio / 2 )
                break;
            //TODO add all corners to resize

        }
        this.ratio = this.size.width / this.size.height
        this.selectionIndicator.update()
    }

}

export default MoveableElement