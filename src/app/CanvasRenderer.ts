import Drawable from 'App/AbstractObjects/Drawable';
import Scene from 'App/Scene'

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
        if(scene.background) this.draw(scene.background)
        if(scene.elements.length) this.drawElements(scene.elements)
    }

    public clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    private draw(sceneElement: Drawable) {
        this.resizeToFitCanvas(sceneElement)
        sceneElement.draw(this.context)
    }

    private drawElements(elements: Drawable[]) {
        elements.forEach(element => this.draw(element))
    }

    private resizeToFitCanvas(sceneElement: Drawable) {
        let widthRatio = sceneElement.originalSize.width / this.width
        let heightRatio = sceneElement.originalSize.height / this.height
        let scale = widthRatio > 1 || heightRatio > 1 ? Math.max(widthRatio, heightRatio) : 1
        sceneElement.size = {
            width: sceneElement.originalSize.width / scale,
            height: sceneElement.originalSize.height / scale
        }
    }

}

export default CanvasRenderer