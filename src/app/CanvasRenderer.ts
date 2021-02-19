import Scene from 'App/Scene/Scene'
import RenderStrategyProvider from './RenderStrategies/RenderStrategyProvider';
import SelectionDecorator from './RenderStrategies/SelectionIndicatorStrategies/SelectionDecorator'
import CanvasElementTypes from './CanvasElements/CanvasElementsTypes';
import SceneController from './Controller/SceneController';
interface ICanvasRenderer {
    render(scene: Scene, controller: SceneController): void
    clear(): void
}
class CanvasRenderer implements ICanvasRenderer {

    private context: CanvasRenderingContext2D
    private width: number
    private height: number

    constructor(private canvas: HTMLCanvasElement) {
        this.context = canvas.getContext('2d')
        this.width = this.canvas.width
        this.height = this.canvas.height
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
            new SelectionDecorator().execute(this.context, controller)
    }

    public clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

}

export default CanvasRenderer