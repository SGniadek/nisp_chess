// Klasa reprezentująca wieżę
class Rook {
    constructor() {
        this.type = "ROOK";
    }

    validateMove(move) {
        
        let legalMove = false;

        // 1. Warunek ruchu w pionie (stałe X, zmienia się Y)
        if (move.sourceX === move.destinationX && move.sourceY !== move.destinationY) {
            legalMove = true;
        }

        // 2. Warunek ruchu w poziomie (stałe Y, zmienia się X)
        if (move.sourceY === move.destinationY && move.sourceX !== move.destinationX) {
            legalMove = true;
        }

        if (legalMove) return true;
        else return false;
         
    }
}