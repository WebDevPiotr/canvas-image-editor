import SceneController from "../SceneController";

interface IMouseUpStrategy {
    execute(controller: SceneController): void
}

export default IMouseUpStrategy