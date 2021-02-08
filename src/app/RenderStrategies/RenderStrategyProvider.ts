import BackgroundRenderStrategy from "./Strategies/BackgroundRenderStrategy";
import ImageRenderStrategy from "./Strategies/ImageRenderStrategy";
import IRenderStrategy from "./IRenderStartegy";
import CanvasElementTypes from '../CanvasElements/CanvasElementsTypes'

class RenderStrategyProvider {

    static get(type: CanvasElementTypes): IRenderStrategy {
        switch (type) {
            case CanvasElementTypes.Background:
                return new BackgroundRenderStrategy()
            case CanvasElementTypes.Image:
                return new ImageRenderStrategy()
        }
    }
}

export default RenderStrategyProvider