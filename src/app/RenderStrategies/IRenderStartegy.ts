import Element from 'App/Abstract/Element'

interface IRenderStrategy {
    execute(context: CanvasRenderingContext2D, element: Element): void
}

export default IRenderStrategy