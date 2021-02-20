import SceneController from "../SceneController";

interface IKeyDownStrategy {
    execute(controller: SceneController): void
}

export default IKeyDownStrategy