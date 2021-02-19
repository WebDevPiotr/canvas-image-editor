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
    return [
        IndicatorTypes.ResizeIndicator_T, IndicatorTypes.ResizeIndicator_TL,
        IndicatorTypes.ResizeIndicator_TR, IndicatorTypes.ResizeIndicator_L,
        IndicatorTypes.ResizeIndicator_R, IndicatorTypes.ResizeIndicator_B,
        IndicatorTypes.ResizeIndicator_BL, IndicatorTypes.ResizeIndicator_BR
    ].includes(type)
}

export default IndicatorTypes