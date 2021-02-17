
import IndicatorTypes, { checkifIsResizeIndicator } from 'App/CanvasElements/SelectionIndicator/IndicatorTypes'
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
        else if (intersection.element.type === IndicatorTypes.RotationIndicator)
            return new RotationStrategy()
        else if (checkifIsResizeIndicator(intersection.element.type as IndicatorTypes))
            return new ResizeStrategy()
        else if (intersection.element !== null)
            return new SelectStartegy()
    }
}

export default MouseDownStrategyProvider