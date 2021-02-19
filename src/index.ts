import './index.scss'
import { Scene, CanvasRenderer, SceneController } from 'App/Core'
import ExportStrategyProvider from 'App/ExportStrategies/ExportStrategyProvider'
import ExportTypes from 'App/ExportStrategies/ExportTypes'

const container: HTMLDivElement = document.querySelector('.app')
const canvas: HTMLCanvasElement = document.querySelector('#canvas')
canvas.width = container.clientWidth
canvas.height = container.clientHeight

const scene = new Scene()
const renderer = new CanvasRenderer(canvas)
const sceneController = new SceneController(canvas, scene, renderer)

sceneController.init()

canvas.addEventListener('drop', async e => {
    e.preventDefault();
    //if(!scene.background) await scene.setBackground(e.dataTransfer.files[0])
    await scene.addToScene(e.dataTransfer.files[0])
    renderer.render(scene)
})

canvas.addEventListener("dragover", e => {
    e.preventDefault();
});

const button = document.querySelector('#export')

button.addEventListener('click', () => {
    ExportStrategyProvider.get(ExportTypes.BMP).execute(canvas)
})