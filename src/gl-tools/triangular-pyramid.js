import Primitive3D from "./primitive-3d";

export default class TriangularPyramid extends Primitive3D {

    // 0.036055513
    // 0.0346410162
    // 0.0173205081
    constructor(colors) {
        super();
        this.original_vertexes = [
            [0, 0.08660254037844387, -0.09013878188659974, 1],
            [-.1, -0.08660254037844387, -0.09013878188659974, 1],
            [.1, -0.08660254037844387, -0.09013878188659974, 1],
            [0, 0, 0.09013878188659974, 1],
        ];
        this.vertexes = this.original_vertexes;
        this.path = [
            0, 1, 2, 0, 1, 3,
            1, 2, 3, 0, 2, 3
        ];
        this.colors = [
            colors[0], colors[0], colors[0],
            colors[1], colors[1], colors[1],
            colors[2], colors[2], colors[2],
            colors[3], colors[3], colors[3]
        ];
    }
}