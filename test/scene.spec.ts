import Scene from '../src/app/Scene/Scene'
import SceneBackground from '../src/app/CanvasElements/SceneBackground'

describe('Scene actions tests', () => {

    let scene = new Scene()

    it('Proper init', () => {
        expect(scene.layers.length).toBe(0)
        expect(scene.background).toBeUndefined()
        expect(scene.border).toBeUndefined()   
    })

    it('Set background', () => {
   
    })
})

