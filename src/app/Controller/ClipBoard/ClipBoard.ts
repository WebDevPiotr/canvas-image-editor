import IClipBoard from './IClipBoard'

class ClipBoard implements IClipBoard {

    private _current: string

    public write(content: string) {
        this._current = content
    }

    public read(): string {
        return this._current
    }

}

export default ClipBoard