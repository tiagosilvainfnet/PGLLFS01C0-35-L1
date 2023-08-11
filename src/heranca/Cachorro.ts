import Animal from "./Animal";
import AnimalInterface from "../interface/AnimalInterface";

export default class Cachorro extends Animal implements AnimalInterface{
    constructor(nome: string){
        super(nome);
    }
    latir(){
        console.log(`${this.nome} latiu.`);
    }
}