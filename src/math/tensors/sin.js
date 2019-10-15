import Tensor from "./tensor";
import times from "./times";
import cos from "./cos";

export default class sin extends Tensor {

    constructor(val) {
        super();
        this.val = val;
    }
    resolve() {
        return Math.sin(this.val.resolve());
    }
    derivitive() {
        return new times(
            new cos(this.val),
            this.val.derivitive()
        );
    }
    print() {
        return 'sin('+ this.val +')';
    }
}