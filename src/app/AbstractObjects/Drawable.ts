import { Size } from 'App/Types'
import { v4 as uuidv4 } from 'uuid';

interface IDrawable {
    draw(context: CanvasRenderingContext2D): void
}

abstract class Drawable implements IDrawable {

    readonly id: string
    private _size: Size
    private _originalSize: Size

    get size() { return this._size }
    set size(size: Size) { this._size = size }

    get originalSize() { return this._originalSize }

    get image() { return this._image }

    constructor(private _image: HTMLImageElement) {
        this.id = uuidv4();
        this._originalSize = { width: _image.width, height: _image.height }
    }

    public abstract draw(context: CanvasRenderingContext2D): void

}

export default Drawable