import Scene from '../src/app/Scene/Scene'

describe('Init Scene', () => {
    it('empty scene', () => {
        let scene = Scene.getInstance()
        expect(scene.layers.length).toBe(0)
    })
})

