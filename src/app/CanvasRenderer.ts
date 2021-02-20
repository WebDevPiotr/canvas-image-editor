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
}
class CanvasRenderer implements ICanvasRenderer {

    private _context: CanvasRenderingContext2D
    private _width: number
    private _height: number
    private _scale: number

    constructor(private canvas: HTMLCanvasElement) {
        this._context = canvas.getContext('2d')
        this._width = this.canvas.width
        this._height = this.canvas.height
    }

    public render(scene: Scene, controller: SceneController) {
        this.clear()
        if (scene.background) this.renderBackground(scene.background)
        if (scene.layers.length) this.renderContentLayers(scene.layers)
        if (controller.selectionIndicator) new SelectionRenderStrategy().execute(this.context, controller)
        if (controller.markingBox) new MarkingBoxRenderStrategy().execute(this.context, controller)
    }

    private renderBackground(background: SceneBackground) {
        RenderStrategyProvider.get(background.type).execute(this.context, background)
        this._scale = background.originalSize.width / this.context.canvas.clientWidth 
    }

    private renderContentLayers(layers: SceneLayer<MoveableElement>[]){
        layers.forEach(({ element }) => {
            RenderStrategyProvider.get(element.type).execute(this.context, element)
        })
    }

    public clear() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.save()
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.restore()
    }

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