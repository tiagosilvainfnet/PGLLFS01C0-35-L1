"use strict";
class Pessoa {
    constructor(nome = "") {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        if (nome === "cacete") {
            throw new Error("Palavrão não é permitido");
        }
        else {
            this.nome = nome;
        }
    }
}
const p1 = new Pessoa("Adão");
console.log(p1.getNome());
p1.setNome("cacete");
console.log(p1.getNome());
