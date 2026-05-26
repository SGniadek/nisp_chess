// Klasa reprezentująca króla
class King {
    constructor() {
        this.type = "KING";
    }

    validateMove(move) {
        let legalMove = false;

        // Obliczamy o ile pól figura ma się przesunąć w osi X i Y
        let diffX = Math.abs(move.destinationX - move.sourceX);
        let diffY = Math.abs(move.destinationY - move.sourceY);

        // Król porusza się o 1 pole w dowolnym kierunku. 
        // Wartości diffX i diffY muszą być mniejsze lub równe 1.
        // Wykluczamy też sytuację, w której król nie rusza się z miejsca (diffX === 0 i diffY === 0).
        if (diffX <= 1 && diffY <= 1 && !(diffX === 0 && diffY === 0)) {
            legalMove = true;
        }

        if (legalMove) return true;
        else return false;
    }
}