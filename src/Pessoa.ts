class Pessoa{
    private nome: string;

    constructor(nome: string=""){
        this.nome = nome;
    }

    public getNome(): string{
        return this.nome;
    }
    public setNome(nome: string): void{
        if(nome === "cacete"){
            throw new Error("Palavrão não é permitido");
        }else{
            this.nome = nome;
        }
    }
}

const p1 = new Pessoa("Adão");
console.log(p1.getNome());
p1.setNome("cacete");
console.log(p1.getNome());