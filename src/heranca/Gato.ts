import Animal from "./Animal";

export default class Gato extends Animal {
    constructor(nome: string) {
        super(nome);
    }
    miar() {
        console.log(`${this.nome} miou.`);
    }
}