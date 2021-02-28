import { Size } from 'App/Types'
import Element from './Element'
import Vector from 'Utils/VectorUtils'


interface IRenderable {
    draw(context: CanvasRenderingContext2D, ...params: any[]): void
}
abstract class RenderableElement extends Element implements IRenderable {

    private _size: Size
    private _originalSize: Size
    private _ratio: number
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

    get ratio() { return this._ratio }
    set ratio(ratio: number) { this._ratio = ratio }

    get originalSize() { return this._originalSize }
    set originalSize(originalSize: Size) { this._originalSize = originalSize }

    abstract draw(context: CanvasRenderingContext2D, ...params: any[]): void

    protected resizeToFitCanvas(context: CanvasRenderingContext2D) {
        let widthRatio = this.size.width / context.canvas.width
        let heightRatio = this.size.height / context.canvas.height
        if (widthRatio > 1 || heightRatio > 1) {
            let scale = Math.max(widthRatio, heightRatio)
            this.size = {
                width: Math.floor(this.originalSize.width / scale),
                height: Math.floor(this.originalSize.height / scale)
            }
            this.position = new Vector(this.size.width / 2, this.size.height / 2)
        }
    }

}

export default RenderableElement