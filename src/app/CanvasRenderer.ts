import Scene from 'App/Scene/Scene'
import SceneController from './Controller/SceneController';
import SceneBackground from './CanvasElements/Elements/SceneBackground';
import SceneLayer from './Scene/SceneLayer';
import MoveableElement from './CanvasElements/Abstract/MoveableElement';
interface ICanvasRenderer {
    render(scene: Scene, controller: SceneController): void
    clear(): void
    setSize(backgrond: SceneBackground): void
    resize(): void
}
class CanvasRenderer implements ICanvasRenderer {

    private _canvas: HTMLCanvasElement
    private _context: CanvasRenderingContext2D
    private _width: number
    private _height: number
    private _maxWidth: number
    private _maxHeight: number
    private _scale: number

    constructor(private _container: HTMLDivElement) {
        const { clientHeight, clientWidth } = this._container
        this._maxHeight = clientHeight
        this._maxWidth = clientWidth
        this._canvas = document.createElement('canvas')
        this.canvas.tabIndex = 1
        this._context = this._canvas.getContext('2d')
        this._container.appendChild(this._canvas)
    }

    public setSize(background: SceneBackground) {
        const { originalSize } = background
        this._canvas.width = originalSize.width
        this._canvas.height = originalSize.height
        this._width = originalSize.width
        this._height = originalSize.height
        this.setCanvasStyle()
        this._scale = this._canvas.width / this._canvas.clientWidth
    }

    public resize() {
        const { clientHeight, clientWidth } = this._container
        this._maxHeight = clientHeight
        this._maxWidth = clientWidth
        this.setCanvasStyle()
        this._scale = this._canvas.width / this._canvas.clientWidth
    }

    public render(scene: Scene, controller: SceneController) {
        this.clear()
        if (scene.background) scene.background.draw(this.context)
        if (scene.layers.length) scene.layers.forEach(({ element }: SceneLayer<MoveableElement>) => element.draw(this.context))
        if (controller.selectionIndicator) controller.selectionIndicator.draw(this.context, this._scale)
        if (controller.markingBox) controller.markingBox.draw(this.context)
    }

    public clear() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.save()
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.restore()
    }

    private setCanvasStyle() {
        const ratio = this._width / this._height

        if (this._maxWidth > this._maxHeight) {
            if (this._width > this._height) {
                if (this._maxWidth / ratio >= this._maxHeight) {
                    this._canvas.style.width = `${this._maxHeight * ratio}px`
                    this._canvas.style.height = `${this._maxHeight}px`
                }
                else {
                    this._canvas.style.width = `${this._maxWidth}px`
                    this._canvas.style.height = `${this._maxWidth / ratio}px`
                }
            }
            else {
                this._canvas.style.width = `${this._maxHeight * ratio}px`
                this._canvas.style.height = `${this._maxHeight}px`
            }
        }
        else {
            if (this._width > this._height) {
                this._canvas.style.width = `${this._maxWidth}px`
                this._canvas.style.height = `${this._maxWidth / ratio}px`
            }
            else {
                if (this._maxHeight * ratio >= this._maxWidth) {
                    this._canvas.style.width = `${this._maxWidth}px`
                    this._canvas.style.height = `${this._maxWidth / ratio}px`
                }
                else {
                    this._canvas.style.width = `${this._maxHeight * ratio}px`
                    this._canvas.style.height = `${this._maxHeight}px`
                }
            }
        }
    }

    get canvas() { return this._canvas }
    get context() { return this._context }
    get width() { return this._width }
    get height() { return this._height }
    get scale() { return this._scale }

    static renderSceneToContext(scene: Scene, context: CanvasRenderingContext2D) {
        if (scene.background) scene.background.draw(context)
        if (scene.layers.length)
            scene.layers.forEach(({ element }) => {
                element.draw(context)
            })
    }

}

export default CanvasRenderer