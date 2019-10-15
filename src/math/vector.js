import Matrix from "./matrix";

export default class Vector {

    constructor(...arr) {
        if (arr.some(t => {if (typeof t !== 'number') {console.log(typeof t, t); return true;} return false; })) {
            throw new Error('the Vector must receive numbers only');
        }
        this.data = arr;
    }
    asMarix() {
        return new Matrix([this.data]);
    }
    addConst(x) {
        return new Vector( ...this.data.map(t => t + x));
    }
    substructConst(x) {
        return new Vector(...this.data.map(t => t - x));
    }
    multiplyConst(x) {
        return new Vector(...this.data.map(t => t * x));
    }
    divideConst(x) {
        return new Vector(...this.data.map(t => t / x));
    }
    powConst(x) {
        return new Vector(...this.data.map(t => Math.pow(t, x)));
    }
    sum() {
        return this.data.reduce((a, b) => a + b, 0);
    }
    add(vector) {
        this.checkForOperetion(vector);
        return new Vector(...this.data.map((t, i) => t + vector.data[i]));
    }
    substruct(vector) {
        this.checkForOperetion(vector);
        return new Vector(...this.data.map((t, i) => t - vector.data[i]));
    }
    dot(vector) {
        this.checkForOperetion(vector);
        return new Vector(...this.data.map((t, i) => t * vector.data[i]));
    }

    module() {
        return Math.sqrt(this.data.reduce((a, b) => a + b**2, 0));
    }
    divide(vector) {
        this.checkForOperetion(vector);
        return new Vector(...this.data.map((t, i) => t / vector.data[i]));
    }
    distance(vector) {
        this.checkForOperetion(vector);
        return Math.sqrt(this.substruct(vector).powConst(2).sum());
    }
    checkForOperetion(vector) {
        if (!(vector instanceof Vector)) {
            throw new Error('this function expect to receive a Vector as a parameter, ' + (typeof vector) + ' given');
        }
        if (vector.data.length !== this.data.length) {
            throw new Error('The length of the Vectors need to be the same in any vector operation');
        }
    }
    print() {
        console.log(this.data);
    }
    isParralel(vector) {
        this.checkForOperetion(vector);
        return this.data.map((t, i) => t/vector[i]).every((t, i, arr) => t === arr[0]);
    }
    asUnit() {
        return this.divideConst(this.module());
    }
}