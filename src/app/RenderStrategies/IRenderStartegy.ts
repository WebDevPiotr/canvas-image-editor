import Element from 'App/CanvasElements/Abstract/Element'
interface IRenderStrategy {
    execute(context: CanvasRenderingContext2D, element: Element): void
}

export default IRenderStrategy