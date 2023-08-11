export default interface AnimalInterface {
    nome: string;
    mover(distanceInMeters: number): void;
    makeSound(): void;
    respirar(): void;
    dormir(): void;
}