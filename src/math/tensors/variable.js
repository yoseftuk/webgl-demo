import Tensor from "./tensor";

export default class variable extends Tensor {

    constructor(val) {
        super();
        this.val = val;
    }
    resolve() {
        return this.val;
    }
    set(val) {
        this.val = val;
        return this;
    }
    derivitive() {
        return new variable(0);
    }
    print() {
        return '' + this.val;
    }
}