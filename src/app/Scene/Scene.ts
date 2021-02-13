import SceneBackground from '../CanvasElements/SceneBackground'
import SceneBorder from '../CanvasElements/SceneBorder'
import ImageLoader from '../Loaders/ImageLoader'
import ImageSprite from '../CanvasElements/ImageSprite';
import MoveableElement from '../Abstract/MoveableElement';
import SceneLayer from './SceneLayer'

interface IScene {
    addLayer(object: MoveableElement): void
    removeLayer(object: MoveableElement): void
}

class Scene implements IScene {

    private static instance: Scene;
    private _background: SceneBackground
    private _border: SceneBorder
    private _layers: SceneLayer<MoveableElement>[] = []

    get background() { return this._background }
    get border() { return this._border }
    get layers() { return this._layers }

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
            this.addLayer(new ImageSprite(image))
    }

    public addLayer(element: MoveableElement) {
        this._layers.push(new SceneLayer(this._layers.length, element))
    }

    public removeLayer(element: MoveableElement) {

    }

}

export default Scene