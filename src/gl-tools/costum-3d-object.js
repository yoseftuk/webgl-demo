import Object3D from "./object-3d";

export default class Custom3DObject extends Object3D {

    constructor(vertexes, colors) {
        super();
        this.vertexes = vertexes;
        this.colors = colors;
    }
}