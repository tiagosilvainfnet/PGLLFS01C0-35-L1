"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    area() {
        return Math.pow(this.lado, 2);
    }
}
class CalculoArea {
    calculaArea(shape) {
        return shape.area();
    }
}
const ret = new Rectangle(10, 20);
const circ = new Circle(10);
const quad = new Quadrado(10);
const calc = new CalculoArea();
console.log(calc.calculaArea(quad));
console.log(calc.calculaArea(circ));
console.log(calc.calculaArea(ret));
