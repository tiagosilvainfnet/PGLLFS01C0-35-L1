interface ComerInterface{
    comer(): void;
}

interface BeberInterface{
    beber(): void;
}

interface DormirInterface{
    dormir(): void;
}


class SerHumano implements ComerInterface, BeberInterface, DormirInterface{
    comer(): void{
        console.log('Comer');
    }

    beber(): void{
        console.log('Beber');
    }

    dormir(): void{
        console.log('Dormir');
    }
}

class Morcebo implements ComerInterface, BeberInterface{
    comer(): void{
        console.log('Comer');
    }

    beber(): void{
        console.log('Beber');
    }
}