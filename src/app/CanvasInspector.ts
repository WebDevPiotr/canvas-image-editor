import MoveableElement from "App/Abstract/MoveableElement";
import { Intersection } from "App/Types";
import Vector from "utils/VectorUtils";
class CanvasInspector {

    static find(position: Vector, elements: MoveableElement[]): Intersection {
        let intersectedElements = elements.filter(element => this.isInsideElement(position, element))
        return intersectedElements[intersectedElements.length - 1] || null
    }

    static isInsideElement(position: Vector, element: MoveableElement): boolean {
        return (
            position.x >= element.position.x - element.size.width / 2 &&
            position.x <= element.position.x + element.size.width / 2 &&
            position.y >= element.position.y - element.size.height / 2 &&
            position.y <= element.position.y + element.size.height / 2
        )
    }
}

export default CanvasInspector