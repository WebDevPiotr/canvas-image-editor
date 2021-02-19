
import CanvasElementsTypes from 'App/CanvasElements/CanvasElementsTypes'
import { Intersection } from 'App/Types'
import IMouseDownStrategy from './IMouseDownStrategy'
import SelectStartegy from './Strategies/SelectStrategy'
import UnselectStartegy from './Strategies/DeselectStrategy'
import RotationStrategy from './Strategies/RotationStrategy'
import ResizeStrategy from './Strategies/ResizeStrategy'
class MouseDownStrategyProvider {

    static get(intersection: Intersection): IMouseDownStrategy {
        if (intersection.element === null)
            return new UnselectStartegy()
        else if (intersection.element.type === CanvasElementsTypes.RotationIndicator)
            return new RotationStrategy()
        else if (intersection.element.type === CanvasElementsTypes.ResizeIndicator)
            return new ResizeStrategy()
        else if (intersection.element !== null)
            return new SelectStartegy()
    }
}

export default MouseDownStrategyProvider