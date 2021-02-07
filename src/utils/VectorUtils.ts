interface IVector {
    x: number,
    y: number
    add(vector: Vector): Vector
    sub(vector: Vector): Vector
    clone(): Vector
}

class Vector implements IVector {

    constructor(public x: number, public y: number) { }

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
}

export default Vector