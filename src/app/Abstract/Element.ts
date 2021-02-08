import { Size } from 'App/Types'
import { v4 as uuidv4 } from 'uuid';
import CanvasElementTypes from '../CanvasElements/CanvasElementsTypes'


abstract class Element {

    readonly id: string
    private _type: CanvasElementTypes
    private _size: Size
    private _originalSize: Size

    constructor() {
        this.id = uuidv4()
    }

    get type() { return this._type }
    set type(type: CanvasElementTypes) { this._type = type }

    get size() { return this._size }
    set size(size: Size) { this._size = size }

    get originalSize() { return this._originalSize }
    set originalSize(originalSize: Size) { this._originalSize = originalSize }

}

export default Element