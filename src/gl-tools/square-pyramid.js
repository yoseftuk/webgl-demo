import Primitive3D from "./primitive-3d";

export default class SquarePyramid extends Primitive3D {

    constructor(colors) {
        super();
        this.original_vertexes = [
            [-.1, 0, .1, 1],
            [.1, 0, .1, 1],
            [-.1, 0, -.1, 1],
            [.1, 0, -.1, 1],
            [0, 0.17320508, 0, 1],
        ];
        this.vertexes = this.original_vertexes;
        this.path = [
            0, 1, 3, 0, 3, 2,
            0, 1, 4, 0, 2, 4,
            2, 3, 4, 1, 3, 4,
        ];
        // this.vertexes = [
        //     [-.1, 0, .1, 1],
        //     [.1, 0, .1, 1],
        //     [.1, 0, -.1, 1],
        //     [-.1, 0, .1, 1],
        //     [.1, 0, -.1, 1],
        //     [-.1, 0, -.1, 1],
        //
        //     [-.1, 0, .1, 1],
        //     [.1, 0, .1, 1],
        //     [0, 0.17320508, 0, 1],
        //
        //     [-.1, 0, .1, 1],
        //     [-.1, 0, -.1, 1],
        //     [0, 0.17320508, 0, 1],
        //
        //     [-.1, 0, -.1, 1],
        //     [.1, 0, -.1, 1],
        //     [0, 0.17320508, 0, 1],
        //
        //     [.1, 0, .1, 1],
        //     [.1, 0, -.1, 1],
        //     [0, 0.17320508, 0, 1],
        //
        // ];
        this.colors = [
            colors[0], colors[0], colors[0], colors[0], colors[0], colors[0],
            colors[1], colors[1], colors[1], colors[2], colors[2], colors[2],
            colors[3], colors[3], colors[3], colors[4], colors[4], colors[4]
        ]
    }
}