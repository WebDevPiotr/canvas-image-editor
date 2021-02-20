import IKeyDownStrategy from './IKeyDownStrategy'
import PasteStrategy from './Strategies/PasteStrategy'
import CopyStrategy from './Strategies/CopyStrategy'

class KeyDownStrategyProvider {

    static get(e: KeyboardEvent): IKeyDownStrategy {
        if (e.ctrlKey && e.code === 'KeyC') 
            return new CopyStrategy()
        else if(e.ctrlKey && e.code === 'KeyV')
            return new PasteStrategy()
    }
}

export default KeyDownStrategyProvider