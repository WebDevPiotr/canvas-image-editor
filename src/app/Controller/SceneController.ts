import { Intersection } from '../Types'
import { Scene, CanvasInspector } from '../Core'
import Vector from 'Utils/VectorUtils'
import MoveableElement from 'App/Abstract/MoveableElement'
import ControllerModeType from './ControllerModeType'
import MouseMovingStrategyProvider from './MouseMoveStrategies/MouseMoveStrategyProvider'
import MouseDownStrategyProvider from './MouseDownStrategies/MouseDownStrategyProvider'

class SceneController {

    private _selectedElement: MoveableElement
    private isMouseDown: boolean
    private _mode: ControllerModeType = ControllerModeType.UNSELECTED

    get selectedElement(){ return this._selectedElement}
    set selectedElement(selectedElement: MoveableElement){ this._selectedElement = selectedElement}

    get mode(){ return this._mode}
    set mode(mode: ControllerModeType){ this._mode = mode}

    constructor(private canvas: HTMLCanvasElement) { }

    public init() {
        this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this))
        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this))
        this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this))
    }

    private onMouseDown(e: MouseEvent) {
        this.isMouseDown = true
        const mousePosiition = this.getMousePosition(e)
        const intersectedElement = this.intersectScene(mousePosiition)
        console.log(intersectedElement)
        MouseDownStrategyProvider.get(this.mode, intersectedElement)?.execute(intersectedElement, mousePosiition, this)
    }

    private onMouseMove(e: MouseEvent) {
        if (this.isMouseDown) {
            const mousePosiition = this.getMousePosition(e)
            MouseMovingStrategyProvider.get(this.mode)?.execute(mousePosiition, this)
        }
    }

    private onMouseUp() {
        this.isMouseDown = false
    }

    private getMousePosition(e: MouseEvent): Vector {
        let bbox = this.canvas.getBoundingClientRect();
        return new Vector(e.clientX - bbox.left, e.clientY - bbox.top)
    }

    private intersectScene(mousePos: Vector): Intersection {
        return CanvasInspector.findClickedElement(mousePos, Scene.getInstance().layers)
    }

}

export default SceneController