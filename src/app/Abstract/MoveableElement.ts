import Element from './Element'
import Vector from '../../utils/VectorUtils'

interface IMoveable {
    select(mousePosition: Vector): void
    deselect(): void
    move(mousePosition: Vector): void
}

abstract class MoveableElement extends Element implements IMoveable {

    private _isClickable: boolean = true
    private _isSelected: boolean = false
    private _position: Vector = new Vector(0, 0)
    private _offset: Vector

    get isClickable() { return this._isClickable }
    set isClickable(isClickable: boolean) { this._isClickable = isClickable }

    get isSelected() { return this._isSelected }
    get position() { return this._position }

    public select(mousePosiition: Vector) {
        this._isSelected = true
        this._offset = mousePosiition.sub(this._position)
    }

    public deselect() {
        this._isSelected = false
    }

    public move(mousePosiition: Vector) {
        this._position = mousePosiition.sub(this._offset)
    }

}

export default MoveableElement