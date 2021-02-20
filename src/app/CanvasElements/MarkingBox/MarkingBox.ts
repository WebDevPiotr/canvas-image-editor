import MarkingBoxRenderStrategy from "App/RenderStrategies/MarkingBoxStrategies/MarkingBoxRenderStartegy";
import Vector from "Utils/VectorUtils";
import RenderableElement from "../Abstract/RenderableElement";
import CanvasElementTypes from "../CanvasElementsTypes";
import MarkingBoxState from './MarkingBoxState'


class MarkingBox extends RenderableElement {

    private _state: MarkingBoxState

    constructor(startPosition: Vector) {
        super(CanvasElementTypes.MarkingBox)
        this.position = startPosition
        this.size = { width: 0, height: 0 }
        this._state = MarkingBoxState.RESIZING
    }

    public resize(mousePosition: Vector) {
        this.size = { width: mousePosition.x - this.position.x, height: mousePosition.y - this.position.y }
    }

    public end(){
        this._state = MarkingBoxState.FINAL
    }

    get state() { return this._state }
    set state(state: MarkingBoxState) { this._state = state }
}

export default MarkingBox