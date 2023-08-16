"use strict";
class Model {
    constructor(id) {
        this.id = id;
    }
    save() {
        console.log('saving model');
    }
    update() {
        console.log('updating model');
    }
    delete() {
        console.log('deleting model');
    }
    list() {
        console.log('listing models');
    }
}
class Livro extends Model {
    constructor(id, nome) {
        super(id);
        this.nome = nome;
    }
    realizarEmprestimo() {
        console.log('realizando emprestimo');
    }
}
class Autor extends Model {
    constructor(id, nome) {
        super(id);
        this.nome = nome;
    }
}
