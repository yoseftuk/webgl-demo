
export default class Complex {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(complex) {
        return new Complex(this.x + complex.x, this.y + complex.y);
    }
    subs(complex) {
        return new Complex(this.x - complex.x, this.y - complex.y);
    }
    mult(complex) {
        let x = this.x*complex.x - this.y*complex.y;
        let y = this.x*complex.y + complex.x*this.y;
        return new Complex(x, y);
    }
    devide(complex) {
        const D = complex.x ** 2 + complex.y ** 2;
        const x = complex.x / D ;
        const y = -complex.y / D;
        return this.mult(new Complex(x, y));
    }
    abs() {
        return (this.x**2 + this.y**2)**.5;
    }
    exp() {}
    sin() {
        return new Complex(Math.sin(this.x)*Math.cosh(this.y), Math.cos(this.x)*Math.sinh(this.y));
    }
    cos() {
        return new Complex(Math.cos(this.x)*Math.cosh(this.y), -Math.sin(this.x)*Math.sinh(this.y));
    }
    tan() {
        return this.cos().devide(this.sin());
    }
}