import Scene from 'App/Scene/Scene'
import RenderStrategyProvider from './RenderStrategies/RenderStrategyProvider';
import SelectionDecorator from './RenderStrategies/Decorators/SelectionDecorator'
import CanvasElementTypes from './CanvasElements/CanvasElementsTypes';
interface ICanvasRenderer {
    render(scene: Scene): void
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

    public render(scene: Scene) {
        this.clear()
        if (scene.background)
            RenderStrategyProvider.get(scene.background.type as CanvasElementTypes).execute(this.context, scene.background)
        if (scene.layers.length)
            scene.layers.forEach(({ element }) => {
                let strategy = RenderStrategyProvider.get(element.type as CanvasElementTypes)
                if (element.isSelected) new SelectionDecorator(strategy).execute(this.context, element)
                else strategy.execute(this.context, element)
            })
    }

    public clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

}

export default CanvasRenderer