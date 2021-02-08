import { Intersection } from './Types'
import { Scene, CanvasRenderer, CanvasInspector } from './Core'
import Vector from 'utils/VectorUtils'
import MoveableElement from 'App/Abstract/MoveableElement'

class SceneController {

    private selectedElement: MoveableElement
    private isMouseDown: boolean

    constructor(private canvas: HTMLCanvasElement) { }

    public init() {
        this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this))
        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this))
        this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this))
    }

    private onMouseDown(e: MouseEvent) {
        this.isMouseDown = true
        const mousePosiition = this.getMousePosition(e)
        this.checkIntersection(mousePosiition)
    }

    private onMouseMove(e: MouseEvent) {
        if (this.isMouseDown) {
            const mousePosiition = this.getMousePosition(e)
            if (this.selectedElement) {
                this.selectedElement.move(mousePosiition)
                CanvasRenderer.getInstance().render(Scene.getInstance())
            }
        }
    }

    private onMouseUp() {
        this.isMouseDown = false
    }

    private checkIntersection(mousePosiition: Vector) {
        const intersectedElement = this.intersectScene(mousePosiition)
        if (intersectedElement) {
            if (this.selectedElement) this.selectedElement.deselect()
            intersectedElement.select(mousePosiition)
            this.selectedElement = intersectedElement
            CanvasRenderer.getInstance().render(Scene.getInstance())
        } else {
            if (this.selectedElement) this.selectedElement.deselect()
            this.selectedElement = null
            CanvasRenderer.getInstance().render(Scene.getInstance())
        }
    }

    private getMousePosition(e: MouseEvent): Vector {
        let bbox = this.canvas.getBoundingClientRect();
        return new Vector(e.clientX - bbox.left, e.clientY - bbox.top)
    }

    private intersectScene(mousePos: Vector): Intersection {
        return CanvasInspector.find(mousePos, Scene.getInstance().elements)
    }

}

export default SceneController