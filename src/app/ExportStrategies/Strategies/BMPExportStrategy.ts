import IExportStrategy from "App/ExportStrategies/IExportStartegy";
import CanvasToBMP from '../../../utils/BMPUtils'

class BMPExportStrategy implements IExportStrategy {

    public execute(canvas: HTMLCanvasElement) {
        CanvasToBMP.toDataURL(canvas, (url: string) => {
            let a = document.createElement("a");
            a.href = url;
            a.download = `Image.jpg`;
            a.click();
        })
    }
}

export default BMPExportStrategy