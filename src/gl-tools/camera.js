import Vector from "../math/vector";
import LinAlg from "../math/linalg";
import Matrix from "../math/matrix";

export default class Camera {

    static camera = null;

    constructor() {
        this.position = new Matrix([[1], [1], [1], [1]]);
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
    }
    static getInstance() {
        if (!Camera.camera) {
            Camera.camera = new Camera();
        }
        return Camera.camera;
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
    getTransformed() {
        return this.translateMatrix.multiply(this.rotateMatrix).multiply(this.scaleMatrix) ;
    }
}