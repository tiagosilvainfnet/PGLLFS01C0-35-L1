export default interface CachorroInterface {
    nome: string;
    mover(distanceInMeters: number): void;
    makeSound(): void;
    respirar(): void;
    dormir(): void;
    latir(): void;
}