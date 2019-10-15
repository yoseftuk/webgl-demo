import Matrix from "./matrix";

export default class LinAlg {

    static distance2D(x1, x2, y1, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    static distance3D(x1, x2, y1, y2, z1, z2) {
        return Math
    }

    static rotate2D(vector, theta) {
        const sin = Math.sin(theta);
        const cos = Math.cos(theta);
        return new Matrix([
            [cos, -sin],
            [sin, cos]
        ])
            .multiply(vector.asMarix())
            .asVector();
    }
    static rotateZ(theta) {
        return new Matrix([
            [Math.cos(theta), -Math.sin(theta), 0, 0],
            [Math.sin(theta), Math.cos(theta), 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);
    }
    static rotateY(theta) {
        return new Matrix([
            [Math.cos(theta), 0, Math.sin(theta), 0],
            [0, 1, 0, 0],
            [-Math.sin(theta), 0, Math.cos(theta), 0],
            [0, 0, 0, 1]
        ]);
    }
    static rotateX(theta) {
        return new Matrix([
            [1, 0, 0, 0],
            [0, Math.cos(theta), -Math.sin(theta), 0],
            [0, Math.sin(theta), Math.cos(theta), 0],
            [0, 0, 0, 1]
        ]);
    }
    static scaleXYZ(x, y, z) {
        return new Matrix([
            [x, 0, 0, 0],
            [0, y, 0, 0],
            [0, 0, z, 0],
            [0, 0, 0, 1]
        ]);
    }
    static scale(ratio) {
        return LinAlg.scaleXYZ(ratio, ratio, ratio);
    }
    static rotate(x, y, z) {
        return LinAlg.rotateX(x).multiply(LinAlg.rotateY(y)).multiply(LinAlg.rotateZ(z));
    }
    static translate(x, y, z) {
        return new Matrix([
            [1, 0, 0, x],
            [0, 1, 0, y],
            [0, 0, 1, z],
            [0, 0, 0, 1]
        ]);
    }
}