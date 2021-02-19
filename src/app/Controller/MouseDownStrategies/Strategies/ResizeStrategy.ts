import SceneController from 'App/Controller/SceneController';
import IMouseDownStrategy from '../IMouseDownStrategy'
import ControllerModeType from 'App/Controller/ControllerModeType';
import { Intersection } from 'App/Types';
import IndicatorTypes from 'App/CanvasElements/SelectionIndicator/IndicatorTypes';

class ResizeStrategy implements IMouseDownStrategy {

    public execute(intersection: Intersection, controller: SceneController) {
        switch (intersection.element.type) {
            case IndicatorTypes.ResizeIndicator_T:
                controller.mode = ControllerModeType.RESIZING_T
                break;
            case IndicatorTypes.ResizeIndicator_TL:
                controller.mode = ControllerModeType.RESIZING_TL
                break;
            case IndicatorTypes.ResizeIndicator_TR:
                controller.mode = ControllerModeType.RESIZING_TR
                break;
            case IndicatorTypes.ResizeIndicator_L:
                controller.mode = ControllerModeType.RESIZING_L
                break;
            case IndicatorTypes.ResizeIndicator_R:
                controller.mode = ControllerModeType.RESIZING_R
                break;
            case IndicatorTypes.ResizeIndicator_B:
                controller.mode = ControllerModeType.RESIZING_B
                break;
            case IndicatorTypes.ResizeIndicator_BL:
                controller.mode = ControllerModeType.RESIZING_BL
                break;
            case IndicatorTypes.ResizeIndicator_BR:
                controller.mode = ControllerModeType.RESIZING_BR
                break;
        }
    }
}

export default ResizeStrategy