import './index.scss'
import { Scene, CanvasRenderer, SceneController } from 'App/Core'
import ExportStrategyProvider from 'App/ExportStrategies/ExportStrategyProvider'
import ExportTypes from 'App/ExportStrategies/ExportTypes'
import ControllerModeType from 'App/Controller/ControllerModeType'

const container: HTMLDivElement = document.querySelector('.canvasWindow')
const canvas: HTMLCanvasElement = document.querySelector('#canvas')
canvas.width = container.clientWidth
canvas.height = container.clientHeight

const scene = new Scene()
const renderer = new CanvasRenderer(canvas)
const sceneController = new SceneController(canvas, scene, renderer)

sceneController.init()

canvas.addEventListener('drop', async e => {
    e.preventDefault();
    await scene.addToScene(e.dataTransfer.files[0])
    renderer.render(scene, sceneController)
})

canvas.addEventListener("dragover", e => {
    e.preventDefault();
});

document.querySelector('#export')
    .addEventListener('click', () => {
        ExportStrategyProvider.get(ExportTypes.PNG).execute(canvas)
    })

document.querySelector('#marking')
    .addEventListener('click', () => {
        sceneController.mode = ControllerModeType.MARKING
        sceneController.selectionIndicator = null
        renderer.render(scene, sceneController)
    })

document.querySelector('#select')
    .addEventListener('click', () => {
        sceneController.mode = ControllerModeType.UNSELECTED
        sceneController.markingBox = null
        renderer.render(scene, sceneController)
    })
document.querySelector('#load')
    .addEventListener('click', async () => {
        let input = document.querySelector('#url') as HTMLInputElement
        let url = input.value
        await scene.addToScene(url)
        renderer.render(scene, sceneController)
    })

document.querySelector('#file')
    .addEventListener('change', async (e) => {
        await scene.setBackground((e.target as HTMLInputElement).files[0])
        renderer.render(scene, sceneController)
    })
