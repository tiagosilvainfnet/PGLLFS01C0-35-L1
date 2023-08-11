import AnimalInterface from '../interface/AnimalInterface';

export default class Animal implements AnimalInterface{
    nome: string;
    constructor(nome: string){
        this.nome = nome;
    }
    mover(distanciaEmMetros: number = 0){
        console.log(`${this.nome} moveu ${distanciaEmMetros}m.`);
    }
    respirar(){
        console.log(`${this.nome} respirou.`);
    }
    dormir(){
        console.log(`${this.nome} dormiu.`);
    }
    makeSound(){
        console.log(`${this.nome} fez um som.`);
    }
}