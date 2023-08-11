"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    mover(distanciaEmMetros = 0) {
        console.log(`${this.nome} moveu ${distanciaEmMetros}m.`);
    }
    respirar() {
        console.log(`${this.nome} respirou.`);
    }
    dormir() {
        console.log(`${this.nome} dormiu.`);
    }
}
exports.default = Animal;
