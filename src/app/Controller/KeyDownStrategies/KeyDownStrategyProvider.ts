import IKeyDownStrategy from './IKeyDownStrategy'
import PasteStrategy from './Strategies/PasteStrategy'
import CopyStrategy from './Strategies/CopyStrategy'
import DeleteStrategy from './Strategies/DeleteStrategy'
import ControllerModeType from '../ControllerModeType'

class KeyDownStrategyProvider {

    static get(e: KeyboardEvent, mode: ControllerModeType): IKeyDownStrategy {
        if (e.ctrlKey && e.code === 'KeyC') 
            return new CopyStrategy()
        else if(e.ctrlKey && e.code === 'KeyV')
            return new PasteStrategy()
        else if(e.code === 'Delete' && mode === ControllerModeType.SELECTED)
            return new DeleteStrategy()
    }
}

export default KeyDownStrategyProvider