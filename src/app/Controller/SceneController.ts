import { Intersection } from '../Types'
import { Scene, CanvasInspector, CanvasRenderer } from 'App/Core'
import Vector from 'Utils/VectorUtils'
import MoveableElement from 'App/CanvasElements/Abstract/MoveableElement'
import ControllerModeType from './ControllerModeType'

import SelectionIndicator from 'App/CanvasElements/SelectionIndicator/SelectionIndicator'
import MarkingBox from 'App/CanvasElements/MarkingBox/MarkingBox'
import ClipBoard from './ClipBoard/ClipBoard'

import MouseMovingStrategyProvider from './MouseMoveStrategies/MouseMoveStrategyProvider'
import MouseDownStrategyProvider from './MouseDownStrategies/MouseDownStrategyProvider'
import MouseUpStrategyProvider from './MouseUpStrategies/MouseUpStrategyProvider'
import KeyDownStrategyProvider from './KeyDownStrategies/KeyDownStrategyProvider'

class SceneController {

    private _selectedElement: MoveableElement
    private _selectionIndicator: SelectionIndicator
    private _isMouseDown: boolean
    private _markingBox: MarkingBox
    private _mode: ControllerModeType = ControllerModeType.UNSELECTED
    private _clipBoard: ClipBoard = new ClipBoard()

    constructor(private canvas: HTMLCanvasElement, private _scene: Scene, private _renderer: CanvasRenderer) {
        this.onMouseDown = this.onMouseDown.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
        this.onMouseUp = this.onMouseUp.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    public init() {
        this.canvas.addEventListener('mousedown', this.onMouseDown)
        this.canvas.addEventListener('mousemove', this.onMouseMove)
        this.canvas.addEventListener('mouseup', this.onMouseUp)
        this.canvas.addEventListener('keydown', this.onKeyDown)
    }

    public close() {
        this.canvas.removeEventListener('mousedown', this.onMouseDown)
        this.canvas.removeEventListener('mousemove', this.onMouseMove)
        this.canvas.removeEventListener('mouseup', this.onMouseUp)
        this.canvas.removeEventListener('keydown', this.onKeyDown)
    }

    private onMouseDown(e: MouseEvent) {
        this._isMouseDown = true
        const mousePosiition = this.getMousePosition(e)
        const intersection = this.intersectScene(mousePosiition)
        MouseDownStrategyProvider.get(intersection, this.mode)?.execute(intersection, this)
        this.renderer.render(this.scene, this)
    }

    private onMouseMove(e: MouseEvent) {
        if (this._isMouseDown) {
            const mousePosiition = this.getMousePosition(e)
            MouseMovingStrategyProvider.get(this.mode)?.execute(mousePosiition, this)
            this.renderer.render(this.scene, this)
        }
    }

    private onMouseUp() {
        this._isMouseDown = false
        MouseUpStrategyProvider.get(this.mode)?.execute(this)
        this.renderer.render(this.scene, this)
    }

    private onKeyDown(e: KeyboardEvent) {
        KeyDownStrategyProvider.get(e)?.execute(this)
    }

    private getMousePosition(e: MouseEvent): Vector {
        let bbox = this.canvas.getBoundingClientRect();
        let x = (e.clientX - bbox.left) * this._renderer.scale
        let y = (e.clientY - bbox.top) * this._renderer.scale
        return new Vector(x, y)
    }

    private intersectScene(mousePos: Vector): Intersection {
        return new CanvasInspector().findClickedElement(mousePos, this.scene.layers, this)
    }

    get selectedElement() { return this._selectedElement }
    set selectedElement(selectedElement: MoveableElement) { this._selectedElement = selectedElement }

    get mode() { return this._mode }
    set mode(mode: ControllerModeType) { this._mode = mode }

    get selectionIndicator() { return this._selectionIndicator }
    set selectionIndicator(selectionIndicator: SelectionIndicator) { this._selectionIndicator = selectionIndicator }

    get markingBox() { return this._markingBox }
    set markingBox(markingBox: MarkingBox) { this._markingBox = markingBox }

    get clipBoard() { return this._clipBoard }

    get scene() { return this._scene }

    get renderer() { return this._renderer }

    //TODO setMode method

}

export default SceneController