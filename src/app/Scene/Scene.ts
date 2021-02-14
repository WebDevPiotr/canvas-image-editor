import SceneBackground from '../CanvasElements/SceneBackground'
import SceneBorder from '../CanvasElements/SceneBorder'
import ImageLoader from '../Loaders/ImageLoader'
import ImageSprite from '../CanvasElements/ImageSprite';
import MoveableElement from '../CanvasElements/Abstract/MoveableElement';
import SceneLayer from './SceneLayer'
import { ElementSource } from 'App/Types';

interface IScene {
    addToScene(source: ElementSource): void
    setBackground(source: ElementSource): void
    removeLayer(object: MoveableElement): void
}

class Scene implements IScene {

    private _background: SceneBackground
    private _border: SceneBorder
    private _layers: SceneLayer<MoveableElement>[] = []

    get background() { return this._background }
    get border() { return this._border }
    get layers() { return this._layers }


    public async addToScene(source: ElementSource){
        const image = await ImageLoader.load(source)
        this._layers.push(new SceneLayer(this._layers.length, new ImageSprite(image)))
    }

    public async setBackground(source: ElementSource){
        const image = await ImageLoader.load(source)
        this._background = new SceneBackground(image)
    }

    public removeLayer(element: MoveableElement) {

    }

}

export default Scene