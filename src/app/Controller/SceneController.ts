import { Intersection } from '../Types'
import { Scene, CanvasInspector, CanvasRenderer } from 'App/Core'
import Vector from 'Utils/VectorUtils'
import MoveableElement from 'App/CanvasElements/Abstract/MoveableElement'
import ControllerModeType from './ControllerModeType'
import MouseMovingStrategyProvider from './MouseMoveStrategies/MouseMoveStrategyProvider'
import MouseDownStrategyProvider from './MouseDownStrategies/MouseDownStrategyProvider'

class SceneController {

    private _selectedElement: MoveableElement
    private _isMouseDown: boolean
    private _mode: ControllerModeType = ControllerModeType.UNSELECTED

    get selectedElement(){ return this._selectedElement}
    set selectedElement(selectedElement: MoveableElement){ this._selectedElement = selectedElement}

    get mode(){ return this._mode}
    set mode(mode: ControllerModeType){ this._mode = mode}

    constructor(private canvas: HTMLCanvasElement, private scene: Scene, private renderer: CanvasRenderer) { }

    public init() {
        this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this))
        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this))
        this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this))
    }

    private onMouseDown(e: MouseEvent) {
        this._isMouseDown = true
        const mousePosiition = this.getMousePosition(e)
        const intersection = this.intersectScene(mousePosiition)
        MouseDownStrategyProvider.get(intersection)?.execute(intersection, this)
        this.renderer.render(this.scene)
    }

    private onMouseMove(e: MouseEvent) {
        if (this._isMouseDown) {
            const mousePosiition = this.getMousePosition(e)
            MouseMovingStrategyProvider.get(this.mode)?.execute(mousePosiition, this)
            this.renderer.render(this.scene)
        }
    }

    private onMouseUp() {
        this._isMouseDown = false
    }

    private getMousePosition(e: MouseEvent): Vector {
        let bbox = this.canvas.getBoundingClientRect();
        return new Vector(e.clientX - bbox.left, e.clientY - bbox.top)
    }

    private intersectScene(mousePos: Vector): Intersection {
        return CanvasInspector.findClickedElement(mousePos, this.scene.layers)
    }

}

export default SceneController