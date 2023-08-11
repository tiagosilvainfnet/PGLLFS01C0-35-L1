class Model{
    id: number;
    constructor(id: number){
        this.id = id;
    }

    save(){
        console.log('saving model');
    }
    update(){
        console.log('updating model');
    }
    delete(){
        console.log('deleting model');
    }
    list(){
        console.log('listing models');
    }   
}

class Livro extends Model{
    nome: string;
    constructor(id: number, nome: string){
        super(id);
        this.nome = nome;
    }

    realizarEmprestimo(){
        console.log('realizando emprestimo');
    }
}

class Autor extends Model{
    nome: string;
    constructor(id: number, nome: string){
        super(id);
        this.nome = nome;
    }
}