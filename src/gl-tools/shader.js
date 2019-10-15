import React, {Component} from 'react';

export default class Shader {

    constructor(source, type) {
        this.source = source;
        this.type = type;
    }
    getSource() {
        return this.source;
    }
    setSource() {
        return this.source;
    }
    create(gl) {
        const shader = gl.createShader(this.type);
        gl.shaderSource(shader, this.source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.log(gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    }

}