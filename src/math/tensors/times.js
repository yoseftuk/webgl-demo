import Tensor from "./tensor";
import add from "./add";

export default class times extends Tensor {

    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    resolve() {
        return this.a.resolve() * this.b.resolve();
    }
    derivitive() {
        return new add(
            new times(this.a, this.b.derivitive()),
            new times(this.b, this.a.derivitive())
        );
    }
    print() {
        return '('+ this.a.print() + '*' + this.b.print() +')';
    }
}