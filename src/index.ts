import './index.scss'
import { Scene, CanvasRenderer, SceneController } from './app/Core'

const scene = Scene.getInstance()
const renderer = CanvasRenderer.getInstance()

const container: HTMLDivElement = document.querySelector('.app')
const canvas: HTMLCanvasElement = document.querySelector('#canvas')
canvas.width = container.clientWidth
canvas.height = container.clientHeight

renderer.setCanvas(canvas)
const sceneController = new SceneController(canvas)
sceneController.init()

canvas.addEventListener('drop', async e => {
    e.preventDefault();
    await scene.addFromFile(e.dataTransfer.files[0])
    renderer.render(scene)
})

canvas.addEventListener("dragover", e => {
    e.preventDefault();
});