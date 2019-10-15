import Tensor from "./tensor";
import substract from "./substract";
import times from "./times";

export default class divide extends Tensor {

    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    resolve() {
        return this.a.resolve() / this.b.resolve();
    }
    derivitive() {
        return new divide(
            new substract(
                new times(this.a, this.b.derivitive()),
                new times(this.b, this.a.derivitive())
            ),
            new times(this.b, this.b)
        );
    }
    print() {
        return '('+ this.a.print() + '/' + this.b.print() +')';
    }
}