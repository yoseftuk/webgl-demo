import LinAlg from "../math/linalg";
import Matrix from "../math/matrix";
import React, {Component} from 'react';
import Camera from "./camera";

export default class Object3D extends Component{

    colors;
    vertexes;
    original_vertexes;
    path;
    constructor(props) {
        super(props);
        this.rotateX = 0;
        this.rotateY = 0;
        this.rotateZ = 0;
        this.scaleX = 0;
        this.scaleY = 0;
        this.scaleZ = 0;
        this.translateX = 0;
        this.translateY = 0;
        this.translateZ = 0;
        this.rotateMatrix = Matrix.identity(4);
        this.scaleMatrix = Matrix.identity(4);
        this.translateMatrix = Matrix.identity(4);
        this.camera = Camera.getInstance();
    }
    rotate(x, y, z) {
        this.rotateX = x;
        this.rotateY = y;
        this.rotateZ = z;
        this.rotateMatrix = LinAlg.rotate(x, y, z);
    }
    scale(x, y, z) {
        this.scaleX = x;
        this.scaleY = y;
        this.scaleZ = z;
        this.scaleMatrix = LinAlg.scaleXYZ(x, y, z);
    }
    translate(x, y, z) {
        this.translateX = x;
        this.translateY = y;
        this.translateZ = z;
        this.translateMatrix = LinAlg.translate(x, y, z);
    }
    transform(callback) {
        // this.vertexes = this.vertexes.map(callback);
    }
    getTransformed() {
        const transform = this.camera.getTransformed().multiply(this.translateMatrix).multiply(this.scaleMatrix).multiply(this.rotateMatrix);
        console.log(transform);
        this.vertexes = this.original_vertexes.map(t => transform.multiply(new Matrix([t]).transpose()).data);
        console.log(this.vertexes);
        return this.path.reduce((a, b) => [...(this.vertexes[a] || a), this.vertexes[b][0], this.vertexes[b][1], this.vertexes[b][2]], []);

    }
    getTransformedColors() {
        return this.colors.reduce((a, b) => {return [...a, ...b]}, []);
        return this.colors;
    }
    render() {
        return null;
    }
}