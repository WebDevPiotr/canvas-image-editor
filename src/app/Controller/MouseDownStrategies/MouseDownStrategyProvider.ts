
import MoveableElement from 'App/Abstract/MoveableElement'
import ControllerModeType from '../ControllerModeType'
import IMouseDownStrategy from './IMouseDownStrategy'
import ElementSelectStartegy from './Strategies/ElementSelectStrategy'
import ElementUnselectStartegy from './Strategies/ElementUnselectStrategy'

class MouseDownStrategyProvider {

    static get(mode: ControllerModeType, clickedElement: MoveableElement): IMouseDownStrategy {
        if (mode === ControllerModeType.SELECTED && clickedElement === null)
            return new ElementUnselectStartegy()
        else if ((mode === ControllerModeType.SELECTED || mode === ControllerModeType.UNSELECTED) && clickedElement !== null)
            return new ElementSelectStartegy()
        else
            return new ElementUnselectStartegy()
    }
}

export default MouseDownStrategyProvider