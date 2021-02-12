import Vector from "Utils/VectorUtils";
import SceneController from "../SceneController";

interface IMouseMoveStrategy {
    execute(mousePosition: Vector, controller: SceneController): void
}

export default IMouseMoveStrategy