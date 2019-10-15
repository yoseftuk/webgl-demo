import Tensor from "./tensor";
import times from "./times";
import variable from "./variable";
import sin from "./sin";

export default class cos extends Tensor {

    constructor(val) {
        super();
        this.val = val;
    }

    resolve() {
        return Math.cos(this.val.resolve());
    }

    derivitive() {
        return new times(
            new times(
                new variable(-1),
                new sin(this.val)
            ),
            this.val.derivitive()
        )
    }
    print() {
        return 'cos('+this.val+')';
    }
}