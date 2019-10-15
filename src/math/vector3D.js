import Vector from "./vector";

export default class Vector3D extends Vector {

    constructor(...arr) {

        if(arr.length !== 3) {
            throw new Error("Vector3D must be 3 unit length");
        }
        super(arr);
    }

    cross(vector) {

        return new Vector(
            this.data[1]*vector.data[2] - this.data[2]*vector.data[1],
            -(this.data[0]*vector.data[2] - this.data[2]*vector.data[0]),
            this.data[0]*vector.data[1] - this.data[1]*vector.data[0],
        );
    }

    // @Returns boolean
    isCoplanar(vector1, vector2) {
        return this.scalarTripleProduct(vector1, vector2) === 0;
    }
    scalarTripleProduct(vector1, vector2) {
        return this.dot(vector1.cross(vector2)).sum();
    }
}