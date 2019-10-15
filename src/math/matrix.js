import Vector from "./vector";

export default class Matrix {

    constructor(arr2D) {
        this.data = arr2D;
    }
    multiply(matrix) {
        const result = [];
        for (let k=0; k<matrix.data[0].length; k++) {
            const row = [];
            for (let i = 0; i < this.data.length; i++) {
                row.push(
                    this.data[i]
                        .map((t, j) => t * matrix.data[j][k])
                        .reduce((a, b) => a + b, 0)
                );
            }
            result.push(row);
        }
        return new Matrix(result).transpose();
    }
    asVector() {
        // if (this.data.length > 1) {
        //     throw new DOMException('Matrix with more then 1 row cannot be converted to Vector');
        // }
        return new Vector(this.data.map(t => {console.log(t); return t[0]}));
    }
    transpose() {
        if (this.t) return new Matrix(this.t);
        const result = [];
        for (let i=0; i<this.data[0].length; i++) {
            const row = [];
            for (let j = 0; j < this.data.length; j++) {
                row.push(this.data[j][i]);
            }
            result.push(row);
        }
        this.t = result;
        return new Matrix(result);
    }
    isSquare() {
        return this.data.length !== this.data[0].length
    }
    determinant() {
        if (this.isSquare()) {
            console.log(this);
            throw new Error('cannot get determinant of non square matrix');
        }
        if (this.d) return this.d;
        this.d = this._findD(this.data);
        return this.d;
    }
    _findD(matrix) {
        if (matrix.length === 1) {
            return matrix[0][0];
        }
        let sign = 1;
        let d = 0;
        for (let i = 0; i < matrix.length; i++) {
            d += sign * matrix[0][i] * this._findD([...matrix].slice(1).map(t => { let u = [...t]; u.splice(i, 1); return u}));
            sign = -sign;
        }
        return d;
    }
    reverse() {
        return new Matrix(this.data.reverse().map(t => t.reverse()));
    }
    adjugate() {
        if (this.adj) {
            return new Matrix(this.adj);
        }
        let result = [];
        let main_sign = 1;
        for (let i = 0; i < this.data.length; i++) {
            let row = [];
            let sign = main_sign;
            for (let j = 0; j < this.data[0].length; j++) {
                row.push(this.data[i][j] * sign);
                sign *= -1;
            }
            result.push(row);
            main_sign *= -1;
        }
        this.adj = result;
        return new Matrix(result);
    }
    invarse() {
        if (this.inv) {
            return new Matrix(this.inv);
        }
        const result = this.transpose().reverse().adjugate().constMultiply(1/this.determinant());
        this.inv = result.data;
        return result;
    }
    constMultiply(value) {
        const result = [];
        for (let i = 0; i < this.data.length; i++) {
            const row = [];
            for (let j = 0; j < this.data.length; j++) {
                row.push(this.data[i][j] * value);
            }
            result.push(row);
        }
        return new Matrix(result);
    }
    resolve(vector) {
        if (this.resolved) {
            return this.resolved;
        }
        if (this.isSquare()) {
            throw new Error('resolve() can be applied only on square matrix');
        }
        if (vector.data.length !== this.data.length) {
            throw new Error('the resolve() vector length must be same as matrix length');
        }
        if (!this.determinant()) {
            return NaN;
        }
        const arr = [];
        for (let i=0; i<this.data.length; i++) {
            arr.push(new Matrix([...this.data.slice(0, i), vector.data, ...this.data.slice(i + 1, this.data.length)]).determinant() / this.determinant());
        }
        this.resilved = new Vector(...arr);
        return this.resilved;

    }
    static identity(size) {
        const rows = [];
        for (let i = 0; i < size; i++) {
            rows.push([]);
            for (let j = 0; j < size; j++) {
                rows[i].push(i === j ? 1 : 0);
            }
        }
        return new Matrix(rows);
    }
}