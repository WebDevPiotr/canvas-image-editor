
import ControllerModeType from '../ControllerModeType'
import IMouseMoveStrategy from './IMouseMoveStrategy'
import ElementMoveStartegy from './Strategies/ElementMoveStrategy'

class MouseMoveStrategyProvider {

    static get(mode: ControllerModeType): IMouseMoveStrategy {
        switch (mode) {
            case ControllerModeType.MOVING:
            case ControllerModeType.SELECTED:
                return new ElementMoveStartegy()
        }
    }
}

export default MouseMoveStrategyProvider