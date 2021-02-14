import SceneController from "../SceneController";
import { Intersection } from "App/Types";

interface IMouseDownStrategy {
    execute(intersection: Intersection, controller: SceneController): void
}

export default IMouseDownStrategy