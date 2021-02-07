import SceneBackground from './SceneElements/SceneBackground'
import SceneBorder from './SceneElements/SceneBorder'
import ImageLoader from './Loaders/ImageLoader'
import ImageSprite from './SceneElements/ImageSprite';
import { SceneElement } from './Types'

interface IScene {
    addElement(object: SceneElement): void
    removeElement(object: SceneElement): void
}

class Scene implements IScene {

    private static instance: Scene;
    private _background: SceneBackground
    private _border: SceneBorder
    private _elements: SceneElement[] = []

    get background() { return this._background }
    get border() { return this._border }
    get elements() { return this._elements }

    private constructor() { }

    public static getInstance(): Scene {
        if (!Scene.instance) {
            Scene.instance = new Scene();
        }
        return Scene.instance;
    }

    public async addFromFile(file: File) {
        const image = await ImageLoader.loadFromFile(file)
        if (!this._background)
            this._background = new SceneBackground(image)
        else
            this.addElement(new ImageSprite(image))
    }

    public addElement(element: SceneElement) {
        this._elements.push(element)
    }

    public removeElement(element: SceneElement) {

    }

}

export default Scene