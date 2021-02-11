import { v4 as uuidv4 } from 'uuid';
import CanvasElementTypes from '../CanvasElements/CanvasElementsTypes'

abstract class Element {

    readonly id: string
    readonly type: CanvasElementTypes

    constructor(type: CanvasElementTypes) {
        this.id = uuidv4()
        this.type = type
    }

}

export default Element