import BackgroundRenderStrategy from "./Strategies/BackgroundRenderStrategy";
import ImageRenderStrategy from "./Strategies/ImageRenderStrategy";
import CircleRenderStrategy from './Strategies/CircleRenderStrategy';
import RectangleRenderStrategy from './Strategies/RectangleRenderStrategy'
import IRenderStrategy from "./IRenderStartegy";
import CanvasElementTypes from '../CanvasElements/CanvasElementsTypes'

class RenderStrategyProvider {

    static get(type: CanvasElementTypes): IRenderStrategy {
        switch (type) {
            case CanvasElementTypes.Background:
                return new BackgroundRenderStrategy()
            case CanvasElementTypes.Image:
                return new ImageRenderStrategy()
            case CanvasElementTypes.CornerIndicator:
                return new CircleRenderStrategy()
            case CanvasElementTypes.SideIndicator:
                return new CircleRenderStrategy()
            case CanvasElementTypes.RotationIndicator:
                return new RectangleRenderStrategy()
        }
    }
}

export default RenderStrategyProvider