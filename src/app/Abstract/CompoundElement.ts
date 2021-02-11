import Element from './Element'
import RenderableElement from './RenderableElement'


abstract class CompoundElement extends Element {

    private _elements: RenderableElement[] = []

    get elements() { return this._elements }

    add(...elements: RenderableElement[]) {
        this._elements.push(...elements)
    }

    remove(element: RenderableElement) {
        this._elements = this._elements.filter(x => x.id === element.id)
    }
}

export default CompoundElement