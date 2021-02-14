import Vector from 'Utils/VectorUtils'
import MoveableElement from './CanvasElements/Abstract/MoveableElement'
import RenderableElement from './CanvasElements/Abstract/RenderableElement'

export type Size = {
    width: number,
    height: number
}

export type Intersection = {
    element: RenderableElement | MoveableElement | null,
    position: Vector
}

export type ElementSource = File | string