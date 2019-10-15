import Tensor from "./tensor";
import variable from "./variable";

export default class placeholder extends Tensor {

    constructor() {
        super();
    }
    resolve() {
        return this.val || NaN;
    }
    set(val) {
        this.val = val;
        return this;
    }
    derivitive() {
        return new variable(1);
    }
    print() {
        return 'X';
    }
}