import Vector from '../src/utils/VectorUtils'

describe('Vector tests', () => {

    it('Proper construction', () => {
        let vector = new Vector(1, 2)
        expect(vector.x).toBe(1)
        expect(vector.y).toBe(2)
    })

    it('Proper construction without params', () => {
        let vector = new Vector()
        expect(vector.x).toBe(0)
        expect(vector.y).toBe(0)
    })

    it('Check set X', () => {
        let vector = new Vector(1, 2)
        vector.setX(8)
        expect(vector).toEqual(new Vector(8,2))
    })

    it('Check set Y', () => {
        let vector = new Vector(1, 2)
        vector.setY(8)
        expect(vector).toEqual(new Vector(1,8))
    })

    it('Check addition', () => {
        let vector1 = new Vector(1, 2)
        let vector2 = new Vector(1, 2)
        vector1.add(vector2)
        expect(vector1).toEqual(new Vector(2, 4))
    })

    it('Check subtraction', () => {
        let vector1 = new Vector(7, 4)
        let vector2 = new Vector(3, 8)
        vector1.sub(vector2)
        expect(vector1).toEqual(new Vector(4, -4))
    })

    it('Check division', () => {
        let vector1 = new Vector(7, 4)
        let factor = 2
        vector1.div(factor)
        expect(vector1).toEqual(new Vector(3.5, 2))
    })

    it('Check cloning', () => {
        let vector1 = new Vector(7, 4)
        let vector2 = new Vector(3, 8)
        let vector3 = vector1.clone().sub(vector2)
        expect(vector1).toEqual(new Vector(7, 4))
        expect(vector2).toEqual(new Vector(3, 8))
        expect(vector3).toEqual(new Vector(4, -4))
    })

    it('Check rotation (0,0)', () => {
        let vector = new Vector(5, 5)
        let origin = new Vector(0, 0)
        let angle = Math.PI / 2
        let newVector = vector.rotateAboutOrigin(origin, angle)
        expect(newVector).toEqual(new Vector(-5, 5))
    })

    it('Check rotation about origin (1 quarter)', () => {
        let vector = new Vector(10, 7)
        let origin = new Vector(5, 7)
        let angle = Math.PI / 4
        let newVector = vector.rotateAboutOrigin(origin, angle)
        expect(newVector).toEqual(new Vector(8.54, 10.54))
    })

    it('Check rotation about origin (2 quarter)', () => {
        let vector = new Vector(10, 7)
        let origin = new Vector(5, 7)
        let angle = 3 * Math.PI / 4
        let newVector = vector.rotateAboutOrigin(origin, angle)
        expect(newVector).toEqual(new Vector(1.46, 10.54))
    })

    it('Check rotation about origin (3 quarter)', () => {
        let vector = new Vector(10, 7)
        let origin = new Vector(5, 7)
        let angle = 5 * Math.PI / 4
        let newVector = vector.rotateAboutOrigin(origin, angle)
        expect(newVector).toEqual(new Vector(1.46, 3.46))
    })

    it('Check rotation about origin (4 quarter)', () => {
        let vector = new Vector(10, 7)
        let origin = new Vector(5, 7)
        let angle = 7 * Math.PI / 4
        let newVector = vector.rotateAboutOrigin(origin, angle)
        expect(newVector).toEqual(new Vector(8.54, 3.46))
    })

    it('Check rotation about origin (PI)', () => {
        let vector = new Vector(10, 7)
        let origin = new Vector(5, 7)
        let angle = Math.PI 
        let newVector = vector.rotateAboutOrigin(origin, angle)
        expect(newVector).toEqual(new Vector(0, 7))
    })

    it('Check rotation about origin (negative angle)', () => {
        let vector = new Vector(10, 7)
        let origin = new Vector(5, 7)
        let angle = - Math.PI /4 
        let newVector = vector.rotateAboutOrigin(origin, angle)
        expect(newVector).toEqual(new Vector(8.54, 3.46))
    })

    it('Check calc angle between', () => {
        let vectorFrom = new Vector(0, 5)
        let vectorTo = new Vector(-5, 0)
        let angle = vectorTo.angleBetween(vectorFrom)
        expect(angle).toEqual(Math.PI/2)
    })

})