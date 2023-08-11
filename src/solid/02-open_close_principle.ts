interface Shape {
    area(): number;
}

class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Quadrado implements Shape {
    lado: number;
    constructor(lado: number) {
        this.lado = lado;
    }

    area(): number {
        return Math.pow(this.lado, 2);
    }
}

class CalculoArea{
    calculaArea(shape: Shape): number{
        return shape.area();
    }
}

const ret = new Rectangle(10, 20)
const circ = new Circle(10)
const quad = new Quadrado(10)

const calc = new CalculoArea();

console.log(calc.calculaArea(quad));
console.log(calc.calculaArea(circ));
console.log(calc.calculaArea(ret));