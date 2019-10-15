import Tensor from "./tensor";

export default class add extends Tensor {

    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    resolve() {
        return this.a.resolve() + this.b.resolve();
    }
    derivitive() {
        return new add(
            this.a.derivitive(),
            this.b.derivitive()
        );
    }
    print() {
        return '('+ this.a.print() + '+' + this.b.print() +')';
    }
}