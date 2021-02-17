import { v4 as uuidv4 } from 'uuid';
import CanvasElementTypes from '../CanvasElementsTypes'
import IndicatorTypes from '../SelectionIndicator/IndicatorTypes';

abstract class Element {

    readonly id: string
    readonly type: CanvasElementTypes | IndicatorTypes

    constructor(type: CanvasElementTypes | IndicatorTypes) {
        this.id = uuidv4()
        this.type = type
    }

}

export default Element