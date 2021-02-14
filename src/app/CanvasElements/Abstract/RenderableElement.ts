import { Size } from 'App/Types'
import Element from './Element'
import Vector from 'Utils/VectorUtils'


abstract class RenderableElement extends Element {

    private _size: Size
    private _originalSize: Size
    private _position: Vector = new Vector(0, 0)
    private _rotation: number = 0

    get position() { return this._position }
    set position(position: Vector) { this._position = position }

    get rotation() { return this._rotation }
    set rotation(rotation: number) {
        if (rotation < 0)
            this._rotation = (rotation % (2 * Math.PI)) + 2 * Math.PI
        else if (rotation > 2 * Math.PI)
            this._rotation = rotation % (2 * Math.PI)
        else
            this._rotation = rotation
    }

    get size() { return this._size }
    set size(size: Size) { this._size = size }

    get originalSize() { return this._originalSize }
    set originalSize(originalSize: Size) { this._originalSize = originalSize }

}

export default RenderableElement