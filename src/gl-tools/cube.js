import Object3D from "./object-3d";
import Primitive3D from "./primitive-3d";
import React, {Component} from 'react';

export default class Cube extends Primitive3D {

    constructor(colors) {
        super();
        this.original_vertexes = [
            [-0.1, -0.1, -0.1, 1],
            [0.1, -0.1, -0.1, 1],
            [0.1, 0.1, -0.1, 1],
            [-0.1, 0.1, -0.1, 1],
            [-0.1, -0.1, 0.1, 1],
            [0.1, -0.1, 0.1, 1],
            [0.1, 0.1, 0.1, 1],
            [-0.1, 0.1, 0.1, 1],

        ];
        this.vertexes = this.original_vertexes;
        this.path = [
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            3, 7, 0, 7, 0, 4,
            1, 2, 6, 1, 6, 5,
            6, 7, 3, 3, 2, 6,
            4, 5, 1, 4, 1, 0,
        ];
        this.colors = [
          colors[0], colors[0], colors[0], colors[0], colors[0], colors[0],
          colors[1], colors[1], colors[1], colors[1], colors[1], colors[1],
          colors[2], colors[2], colors[2], colors[2], colors[2], colors[2],
          colors[3], colors[3], colors[3], colors[3], colors[3], colors[3],
          colors[4], colors[4], colors[4], colors[4], colors[4], colors[4],
          colors[5], colors[5], colors[5], colors[5], colors[5], colors[5],
        ];
    }
}