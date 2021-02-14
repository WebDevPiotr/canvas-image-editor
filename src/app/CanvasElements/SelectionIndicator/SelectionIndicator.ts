import CompundElement from 'App/CanvasElements/Abstract/CompoundElement'
import MoveableElement from 'App/CanvasElements/Abstract/MoveableElement'
import Vector from 'Utils/VectorUtils'
import CanvasElementTypes from '../CanvasElementsTypes'
import ResizeIndicator from './ResizeIndicator'
import RotationIndicator from './RotationIndicator'

class SelectionIndicator extends CompundElement {

    constructor(private _element: MoveableElement) {
        super(CanvasElementTypes.SelectionIndicator)
    }

    get element() { return this._element }
    set element(element: MoveableElement) { this._element = element }

    static fromElement(element: MoveableElement) {
        const { size } = element
        let indicator = new SelectionIndicator(element)
        indicator.add(
            new ResizeIndicator(new Vector(size.width / 2, size.height / 2), CanvasElementTypes.CornerIndicator),
            new ResizeIndicator(new Vector(-size.width / 2, -size.height / 2), CanvasElementTypes.CornerIndicator),
            new ResizeIndicator(new Vector(size.width / 2, -size.height / 2), CanvasElementTypes.CornerIndicator),
            new ResizeIndicator(new Vector(-size.width / 2, size.height / 2), CanvasElementTypes.CornerIndicator),
            new ResizeIndicator(new Vector(size.width / 2, 0), CanvasElementTypes.SideIndicator),
            new ResizeIndicator(new Vector(-size.width / 2, 0), CanvasElementTypes.SideIndicator),
            new ResizeIndicator(new Vector(0, size.height / 2), CanvasElementTypes.SideIndicator),
            new ResizeIndicator(new Vector(0, -size.height / 2), CanvasElementTypes.SideIndicator),
            new RotationIndicator(new Vector(0, -size.height / 2 - 40))
        )
        return indicator
    }

    update() {
        const { size } = this.element
        this.elements[0].position = new Vector(size.width / 2, size.height / 2)
        this.elements[1].position = new Vector(-size.width / 2, -size.height / 2)
        this.elements[2].position = new Vector(size.width / 2, -size.height / 2)
        this.elements[3].position = new Vector(-size.width / 2, size.height / 2)
        this.elements[4].position = new Vector(size.width / 2, 0)
        this.elements[5].position = new Vector(-size.width / 2, 0)
        this.elements[6].position = new Vector(0, size.height / 2)
        this.elements[7].position = new Vector(0, -size.height / 2)
        this.elements[8].position = new Vector(0, -size.height / 2 - 40)
    }

}

export default SelectionIndicator