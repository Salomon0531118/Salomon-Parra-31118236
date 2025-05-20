import { Prisionero } from "../Prototipos/Prisionero";

// Esta estrategia  conocida como "Pavlov" o "Gana-Quédate, Pierde-Cambia". En esencia, simula cómo un prisionero decide si confesar (traicionar) o cooperar (callar) con su cómplice en una serie de interacciones repetidas.
// La lógica principal de este Prisionero se encuentra en el método confesar():

// Primera Interacción:
// Si es la primera vez que este Prisionero interactúa con un cómplice específico, siempre coopera (no confiesa). Es un inicio amistoso para ver cómo reacciona el otro.
// Interacciones Posteriores (Gana-Quédate, Pierde-Cambia):

// Para las rondas siguientes, el Prisionero evalúa el resultado de la ronda anterior:
// Si el resultado de la ronda anterior fue "favorable" para él, entonces repite la misma decisión que tomó en esa ronda. Esto es el "Gana-Quédate".
// Si el resultado de la ronda anterior fue "desfavorable" para él, entonces cambia su decisión respecto a la ronda anterior. Si antes cooperó, ahora traiciona; si antes traicionó, ahora coopera. Esto es el "Pierde-Cambia".

// SALOMON PARRA 31118236

export class SalomonParra extends Prisionero {
    constructor() {
        super();
        this.setNombre('Salomon Parra');
    }
    
    confesar(): boolean {
        const historial = this.getHistorial(this.getComplice().getNombre());
        
        if (historial.length === 0) {
            return false;
        }
    
        return historial[historial.length - 1];
    }
}
