import Cachorro from "./Cachorro";
import CachorroInterface from "../interface/CachorroInterface";

const cachorro: CachorroInterface = new Cachorro("Rex");
cachorro.mover(10);
cachorro.dormir();
cachorro.respirar();
cachorro.makeSound();
cachorro.latir();