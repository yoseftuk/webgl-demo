import Tensor from "./tensor";

export default class acos extends Tensor {

    constructor(val) {
        super();
        this.val = val;
    }
    resolve() {
        return Math.acos(this.val.resolve());
    }
}