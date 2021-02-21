import Scene from 'App/Scene/Scene'
import RenderStrategyProvider from './RenderStrategies/RenderStrategyProvider';
import SelectionRenderStrategy from './RenderStrategies/SelectionIndicatorStrategies/SelectionRenderStrategy'
import SceneController from './Controller/SceneController';
import MarkingBoxRenderStrategy from './RenderStrategies/MarkingBoxStrategies/MarkingBoxRenderStartegy';
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
        this._context = this._canvas.getContext('2d')
        this._container.appendChild(this._canvas)
    }

    public setSize(background: SceneBackground) {
        const { originalSize } = background
        this._canvas.width = originalSize.width
        this._canvas.height = originalSize.height
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
        if (scene.background) this.renderBackground(scene.background)
        if (scene.layers.length) this.renderContentLayers(scene.layers)
        if (controller.selectionIndicator) new SelectionRenderStrategy().execute(this.context, controller, this._scale)
        if (controller.markingBox) new MarkingBoxRenderStrategy().execute(this.context, controller)
    }

    public clear() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.save()
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.restore()
    }

    private renderBackground(background: SceneBackground) {
        RenderStrategyProvider.get(background.type).execute(this.context, background)
    }

    private renderContentLayers(layers: SceneLayer<MoveableElement>[]) {
        layers.forEach(({ element }) => {
            RenderStrategyProvider.get(element.type).execute(this.context, element)
        })
    }

    private setCanvasStyle() {
        if (this._canvas.width > this._canvas.height) {
            this._canvas.style.width = this._canvas.width > this._maxWidth ? '100%' : `${this._canvas.width}px`
            this._canvas.style.height = 'auto'
        }
        else {
            this._canvas.style.height = this._canvas.height > this._maxHeight ? '100%' : `${this._canvas.height}px`
            this._canvas.style.width = 'auto'
        }
    }

    get canvas() { return this._canvas }
    get context() { return this._context }
    get width() { return this._width }
    get height() { return this._height }
    get scale() { return this._scale }

    static renderSceneToContext(scene: Scene, context: CanvasRenderingContext2D) {
        if (scene.background)
            RenderStrategyProvider.get(scene.background.type).execute(context, scene.background)
        if (scene.layers.length)
            scene.layers.forEach(({ element }) => {
                RenderStrategyProvider.get(element.type).execute(context, element)
            })
    }

}

export default CanvasRenderer