import MoveableElement from "App/Abstract/MoveableElement";
import RenderableElement from 'App/Abstract/RenderableElement'
import SceneLayer from 'App/Scene/SceneLayer'
import { Intersection } from "App/Types";
import Vector from "utils/VectorUtils";
class CanvasInspector {

    static findClickedElement(position: Vector, layers: SceneLayer<MoveableElement>[]): Intersection {
        let clickedLayer: SceneLayer<MoveableElement>
        for (let layer of layers) {
            if (layer.element.isSelected) {
                let indicators = layer.element.selectionIndicator.elements
                for (let indicator of indicators) {
                    if (this.isElementClicked(position, indicator))
                        return indicator
                }
            }
            if (this.isElementClicked(position, layer.element)) {
                if (!clickedLayer || clickedLayer.index < layer.index)
                    clickedLayer = layer
            }
        }
        return clickedLayer.element
    }

    static isElementClicked(position: Vector, element: RenderableElement): boolean {
        return (
            position.x >= element.position.x - element.size.width / 2 &&
            position.x <= element.position.x + element.size.width / 2 &&
            position.y >= element.position.y - element.size.height / 2 &&
            position.y <= element.position.y + element.size.height / 2
        )
    }
}

export default CanvasInspector