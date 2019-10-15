import Tensor from "./tensor";

export default class pow extends Tensor {

    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    resolve() {
        return Math.pow(this.a.resolve(), this.b.resolve());
    }
    print() {
        return '('+ this.a.print() + '**' + this.b.print() +')';
    }
}