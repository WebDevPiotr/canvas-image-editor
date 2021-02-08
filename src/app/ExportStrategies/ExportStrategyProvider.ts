import JPGExportStrategy from './Strategies/JPGExportStrategy'
import PNGExportStrategy from './Strategies/PNGExportStrategy'
import BMPExportStrategy from './Strategies/BMPExportStrategy'
import ExportTypes from './ExportTypes'
import IExportStrategy from './IExportStartegy'

class RenderStrategyProvider {

    static get(type: ExportTypes): IExportStrategy {
        switch (type) {
            case ExportTypes.JPG:
                return new JPGExportStrategy()
            case ExportTypes.PNG:
                return new PNGExportStrategy()
            case ExportTypes.BMP:
                return new BMPExportStrategy()
        }
    }
}

export default RenderStrategyProvider