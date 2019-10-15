export default class Physics {

    // @Params vactors: {x: c-position, y: y-position, m: mass}[];
    //@returns: {x: centerX, y: centerY}
    // @Example of use: centerOfMass([{x:6, y:2, m:5}, {x:12, y:8, m:10}]); output: {x: 10, y: 6}
    centerOfMass(vectors) {
        const M = vectors.reduce((a,b) => a + b.m, 0);
        const x = vectors.reduce((a, b) => a + b.x * b.m, 0) / M;
        const y = vectors.reduce((a, b) => a + b.y * b.m, 0) / M;
        return {x, y};
    }
    centroidFromFunction() {} // x = Integral(minX, maxX)(x * f(x)) / Integral(minX, maxX)(f(x)); y = Integral(minX, maxX)(f(x)**2) / Integral(minX, maxX)(f(x)*2)
    verticalMotion(y0, v0, t, g=32) {
        return v0*t + y0 -g*(t**2)/2;
    }
    work(mass, gravity, distance) {
        return mass * gravity * distance;
    }
}