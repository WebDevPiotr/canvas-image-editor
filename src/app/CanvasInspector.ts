import MoveableElement from "App/CanvasElements/Abstract/MoveableElement";
import RenderableElement from 'App/CanvasElements/Abstract/RenderableElement'
import SceneLayer from 'App/Scene/SceneLayer'
import { Intersection } from "App/Types";
import Vector from "Utils/VectorUtils";
class CanvasInspector {

    static findClickedElement(clickPosition: Vector, layers: SceneLayer<MoveableElement>[]): Intersection {
        let clickedLayer: SceneLayer<MoveableElement>

        for (let layer of layers) {

            if (layer.element.isSelected) {
                let indicators = layer.element.selectionIndicator.elements
                for (let indicator of indicators) {
                    if (this.isIndicatorClicked(clickPosition, indicator, layer.element))
                        return { element: indicator, position: clickPosition }
                }
            }

            if (this.isElementClicked(clickPosition, layer.element)) {
                if (!clickedLayer)
                    clickedLayer = layer
                else if (clickedLayer.index < layer.index)
                    clickedLayer = layer
            }

        }

        return { element: clickedLayer?.element || null, position: clickPosition }
    }

    static isElementClicked(clickPosition: Vector, element: RenderableElement): boolean {
        const { size, position, rotation } = element
        let clickPosInElementCoord = clickPosition.clone().rotateAboutOrigin(position, -rotation)
        return (
            clickPosInElementCoord.x >= position.x - size.width / 2 &&
            clickPosInElementCoord.x <= position.x + size.width / 2 &&
            clickPosInElementCoord.y >= position.y - size.height / 2 &&
            clickPosInElementCoord.y <= position.y + size.height / 2
        )
    }

    static isIndicatorClicked(clickPosition: Vector, indicator: RenderableElement, element: RenderableElement): boolean {
        const { position: ePos, rotation } = element
        const { position: iPos, size } = indicator
        let indicatorPosition = ePos.clone().add(iPos)
        let clickPosInElementCoord = clickPosition.clone().rotateAboutOrigin(ePos, -rotation)
        return (
            clickPosInElementCoord.x >= indicatorPosition.x - size.width / 2 &&
            clickPosInElementCoord.x <= indicatorPosition.x + size.width / 2 &&
            clickPosInElementCoord.y >= indicatorPosition.y - size.height / 2 &&
            clickPosInElementCoord.y <= indicatorPosition.y + size.height / 2
        )
    }
}

export default CanvasInspector