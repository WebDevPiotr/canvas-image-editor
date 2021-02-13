import Scene from 'App/Scene/Scene'
import RenderStrategyProvider from './RenderStrategies/RenderStrategyProvider';
import SelectionDecorator from './RenderStrategies/Decorators/SelectionDecorator'
interface ICanvasRenderer {
    render(scene: Scene): void
    clear(): void
}
class CanvasRenderer implements ICanvasRenderer {

    private static instance: CanvasRenderer;
    private canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D
    private width: number
    private height: number

    private constructor() { }

    public static getInstance(): CanvasRenderer {
        if (!CanvasRenderer.instance) {
            CanvasRenderer.instance = new CanvasRenderer();
        }
        return CanvasRenderer.instance;
    }

    public setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.width = this.canvas.width
        this.height = this.canvas.height
    }

    public render(scene: Scene) {
        this.clear()
        if (scene.background)
            RenderStrategyProvider.get(scene.background.type).execute(this.context, scene.background)
        if (scene.layers.length)
            scene.layers.forEach(({ element }) => {
                let strategy = RenderStrategyProvider.get(element.type)
                if (element.isSelected) new SelectionDecorator(strategy).execute(this.context, element)
                else strategy.execute(this.context, element)
            })
    }

    public clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

}

export default CanvasRenderer