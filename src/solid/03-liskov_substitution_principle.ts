class Humano{
    constructor(public nombre: string){}

    comer(){
        console.log('comendo');
    }
}

class Homem extends Humano{
    constructor(nombre: string){
        super(nombre);
    }

    trabalhar(){
        console.log('trabalhando');
    }
}

class Mulher extends Humano{
    constructor(nombre: string){
        super(nombre);
    }

    cuidar(){
        console.log('cuidando');
    }
}

const executarRotinaPadrao = (humano: Humano) => {
    humano.comer();
}

const h = new Homem('João');
const m = new Mulher('Maria');

executarRotinaPadrao(h);
executarRotinaPadrao(m);