interface IVector {
    x: number,
    y: number
    add(vector: Vector): Vector
    sub(vector: Vector): Vector
    clone(): Vector,
    rotateAboutOrigin(origin: Vector, angle: number): Vector
}

class Vector implements IVector {

    public x: number
    public y: number

    constructor(x: number, y: number) {
        this.x = Number(x.toFixed(2))
        this.y = Number(y.toFixed(2))
    }

    public add(vector: Vector) {
        this.x += vector.x
        this.y += vector.y
        return this
    }

    public sub(vector: Vector) {
        this.x -= vector.x
        this.y -= vector.y
        return this
    }

    public clone(): Vector {
        return new Vector(this.x, this.y)
    }

    public rotateAboutOrigin(origin: Vector, angle: number) {
        this.sub(origin)
        this.rotate(angle)
        this.add(origin)
        return this
    }

    public angleBetween(vector: Vector){
        return Math.atan2(this.y, this.x) - Math.atan2(vector.y, vector.x)
    }

    private rotate(angle: number) {
        let c = Math.cos(angle)
        let s = Math.sin(angle)
        let x = this.x * c - this.y * s
        let y = this.x * s + this.y * c
        this.x = Number(x.toFixed(2))
        this.y = Number(y.toFixed(2))
    }
}

export default Vector