import Tensor from "./tensor";

export default class asin extends Tensor {

    constructor(val) {
        super();
        this.val = val;
    }
    resolve() {
        return Math.asin(this.val.resolve());
    }
}