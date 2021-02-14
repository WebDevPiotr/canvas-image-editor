import RenderableElement from './RenderableElement'
import Vector from 'Utils/VectorUtils'
import SelectionIndicator from 'App/CanvasElements/SelectionIndicator/SelectionIndicator'

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

}

export default MoveableElement