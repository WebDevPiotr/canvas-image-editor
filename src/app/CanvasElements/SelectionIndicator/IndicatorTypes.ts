enum IndicatorTypes {
    SelectionIndicator = 'SelectionIndicator',
    RotationIndicator = 'RotationIndicator',
    ResizeIndicator_T = 'ResizeIndicator_T',
    ResizeIndicator_TL = 'ResizeIndicator_TL',
    ResizeIndicator_TR = 'ResizeIndicator_TR',
    ResizeIndicator_L = 'ResizeIndicator_L',
    ResizeIndicator_R = 'ResizeIndicator_R',
    ResizeIndicator_B = 'ResizeIndicator_B',
    ResizeIndicator_BL = 'ResizeIndicator_BL',
    ResizeIndicator_BR = 'ResizeIndicator_BR',
}

export function checkifIsResizeIndicator(type: IndicatorTypes) {
    return type === IndicatorTypes.ResizeIndicator_T ||
        type === IndicatorTypes.ResizeIndicator_TL ||
        type === IndicatorTypes.ResizeIndicator_TR ||
        type === IndicatorTypes.ResizeIndicator_L ||
        type === IndicatorTypes.ResizeIndicator_R ||
        type === IndicatorTypes.ResizeIndicator_B ||
        type === IndicatorTypes.ResizeIndicator_BL ||
        type === IndicatorTypes.ResizeIndicator_BR
}

export default IndicatorTypes