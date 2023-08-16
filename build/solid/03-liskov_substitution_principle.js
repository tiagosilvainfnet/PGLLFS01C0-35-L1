"use strict";
class Humano {
    constructor(nombre) {
        this.nombre = nombre;
    }
    comer() {
        console.log('comendo');
    }
}
class Homem extends Humano {
    constructor(nombre) {
        super(nombre);
    }
    trabalhar() {
        console.log('trabalhando');
    }
}
class Mulher extends Humano {
    constructor(nombre) {
        super(nombre);
    }
    cuidar() {
        console.log('cuidando');
    }
}
const executarRotinaPadrao = (humano) => {
    humano.comer();
};
const h = new Homem('João');
const m = new Mulher('Maria');
executarRotinaPadrao(h);
executarRotinaPadrao(m);
