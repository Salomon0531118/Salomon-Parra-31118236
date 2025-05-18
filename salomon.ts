import { Prisionero } from "../Prototipos/Prisionero";

export class Pavlov extends Prisionero {
    constructor() {
        super();
        this.setNombre('Pavlov');
    }

    confesar(): boolean {
        const historialConEsteComplice = this.getHistorial(this.getComplice().getNombre());
        const historialComplice = this.getComplice().getHistorial(this.getNombre());
        
        // Si es la primera interacción, coopera (no confiesa)
        if (historialConEsteComplice.length === 0) {
            return false;
        }

        const ultimaDecisionPropia = this.obtenerUltimaDecision(historialConEsteComplice);
        const ultimaDecisionComplice = this.obtenerUltimaDecision(historialComplice);
        
        // Evalúa si el resultado fue favorable
        const fueFavorable = this.evaluarResultado(ultimaDecisionPropia, ultimaDecisionComplice);
        
        // Win-Stay, Lose-Shift
        return fueFavorable ? ultimaDecisionPropia : !ultimaDecisionPropia;
    }

    private obtenerUltimaDecision(historial: any[]): boolean {
        // Asume que el historial guarda booleanos (false = cooperar, true = traicionar)
        return historial.length > 0 ? historial[historial.length - 1] : false;
    }

    private evaluarResultado(decisionPropia: boolean, decisionComplice: boolean): boolean {
        // Lógica de evaluación basada en la matriz de pagos del dilema del prisionero
        if (!decisionPropia && !decisionComplice) { // Ambos cooperan
            return true; // Resultado favorable (3 años)
        } else if (decisionPropia && decisionComplice) { // Ambos traicionan
            return false; // Resultado desfavorable (5 años)
        } else if (decisionPropia && !decisionComplice) { // Tú traicionas, él coopera
            return true; // Resultado muy favorable (0 años)
        } else { // Tú cooperas, él traiciona
            return false; // Resultado muy desfavorable (10 años)
        }
    }
}
