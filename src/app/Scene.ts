import SceneBackground from './CanvasElements/SceneBackground'
import SceneBorder from './CanvasElements/SceneBorder'
import ImageLoader from './Loaders/ImageLoader'
import ImageSprite from './CanvasElements/ImageSprite';
import MoveableElement from './Abstract/MoveableElement';

interface IScene {
    addElement(object: MoveableElement): void
    removeElement(object: MoveableElement): void
}

class Scene implements IScene {

    private static instance: Scene;
    private _background: SceneBackground
    private _border: SceneBorder
    private _elements: MoveableElement[] = []

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

    public addElement(element: MoveableElement) {
        this._elements.push(element)
    }

    public removeElement(element: MoveableElement) {

    }

}

export default Scene