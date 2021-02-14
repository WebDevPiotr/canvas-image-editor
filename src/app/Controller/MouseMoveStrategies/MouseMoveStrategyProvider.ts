
import ControllerModeType from '../ControllerModeType'
import IMouseMoveStrategy from './IMouseMoveStrategy'
import MoveStartegy from './Strategies/MoveStrategy'
import RotationStrategy from './Strategies/RotationStrategy'

class MouseMoveStrategyProvider {

    static get(mode: ControllerModeType): IMouseMoveStrategy {
        switch (mode) {
            case ControllerModeType.MOVING:
            case ControllerModeType.SELECTED:
                return new MoveStartegy()
            case ControllerModeType.ROTATING:
                return new RotationStrategy()
        }
    }
}

export default MouseMoveStrategyProvider