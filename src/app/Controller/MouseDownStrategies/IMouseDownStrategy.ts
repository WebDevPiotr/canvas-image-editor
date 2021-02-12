import RenderableElement from "App/Abstract/RenderableElement";
import SceneController from "../SceneController";
import Vector from 'Utils/VectorUtils'

interface IMouseDownStrategy {
    execute(clickedElement: RenderableElement, mousePosition: Vector, controller: SceneController): void
}

export default IMouseDownStrategy