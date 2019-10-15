import React, {Component} from 'react';
import Object3D from "./object-3d";
import Cube from "./cube";
import Camera from "./camera";

export default class Drawer extends Component {

    constructor(props) {
        super(props);
        this.vertexShader =
            '    #version 300 es\n' +
            '    in vec3 position;\n' +
            '    in vec4 color;\n' +
            '    out vec4 fcolor;\n' +
            '\n' +
            '    void main()\n' +
            '    {\n' +
            '        gl_Position = vec4(position, 1) ;\n' +
            '        fcolor = color;\n' +
            '    }\n' +
            '\n';
        this.fragmentShader =
            '    #version 300 es\n' +
            '    precision mediump float;\n' +
            '    in vec4 fcolor;\n' +
            '    out vec4 finalColor;\n' +
            '    void main()\n' +
            '    {\n' +
            '        finalColor = fcolor;\n' +
            '    }\n' +
            '\n';
        this.camera = Camera.getInstance();
    }

    buffer_static_array(data) {
        const buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW);
        return buffer;
    }

    compile_shader(shaderText, type) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, shaderText);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            alert(this.gl.getShaderInfoLog(shader));
            return null
        }
        return shader;
    }

    getProgram(vertexShader, fragmentShader) {
        this.program = this.gl.createProgram();
        this.gl.attachShader(this.program, vertexShader);
        this.gl.attachShader(this.program, fragmentShader);
        this.gl.linkProgram(this.program);
        return this.program;
    }

    bind(name, buffer, size) {
        const attr = this.gl.getAttribLocation(this.program, name);
        this.gl.enableVertexAttribArray(attr);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.vertexAttribPointer(attr, size, this.gl.FLOAT, true, 0, 0);
    }

    prepare(vertexes, colors) {
        const vBuffer = this.buffer_static_array(vertexes);
        const cBuffer = this.buffer_static_array(colors);
        const vertexShader = this.compile_shader(this.vertexShader, this.gl.VERTEX_SHADER);
        const fragmentShader = this.compile_shader(this.fragmentShader, this.gl.FRAGMENT_SHADER);
        this.getProgram(vertexShader, fragmentShader);
        this.gl.useProgram(this.program);
        this.bind('position', vBuffer, 3);
        this.bind('color', cBuffer, 4);
    }

    draw() {
        const obg3DArr = this.props.children;
        const vertexes = obg3DArr.reduce((a, b) => [...a, ...b.getTransformed()], []);
        const colors = obg3DArr.reduce((a, b) => [...a, ...b.getTransformedColors()], []);
        for (let obg of obg3DArr) {
            obg.rotate(obg.rotateX + .01, obg.rotateY + .01, obg.rotateZ + .01);
        }
        this.prepare(vertexes, colors);
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, vertexes.length / 3);
        // this.camera.translate(this.camera.translateX + 0.001, 0, 0);
        this.camera.rotate(0, this.camera.rotateY + 0.01, 0);
        requestAnimationFrame(() => {this.draw()});
    }
    componentDidMount() {
        this.gl = this.canvas.getContext('webgl2');
        this.draw();
    }

    render() {
        return <canvas width={window.innerHeight} height={window.innerHeight} ref={ref => this.canvas = ref }/>;
    }

}