import Scene from 'App/Scene/Scene'
import RenderStrategyProvider from './RenderStrategies/RenderStrategyProvider';
import SelectionRenderStrategy from './RenderStrategies/SelectionIndicatorStrategies/SelectionRenderStrategy'
import SceneController from './Controller/SceneController';
import MarkingBoxRenderStrategy from './RenderStrategies/MarkingBoxStrategies/MarkingBoxRenderStartegy';
interface ICanvasRenderer {
    render(scene: Scene, controller: SceneController): void
    clear(): void
}
class CanvasRenderer implements ICanvasRenderer {

    private _context: CanvasRenderingContext2D
    private _width: number
    private _height: number

    constructor(private canvas: HTMLCanvasElement) {
        this._context = canvas.getContext('2d')
        this._width = this.canvas.width
        this._height = this.canvas.height
    }

    public render(scene: Scene, controller: SceneController) {
        this.clear()
        if (scene.background)
            RenderStrategyProvider.get(scene.background.type).execute(this.context, scene.background)
        if (scene.layers.length)
            scene.layers.forEach(({ element }) => {
                RenderStrategyProvider.get(element.type).execute(this.context, element)
            })
        if (controller.selectionIndicator)
            new SelectionRenderStrategy().execute(this.context, controller)
        if (controller.markingBox)
            new MarkingBoxRenderStrategy().execute(this.context, controller)
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