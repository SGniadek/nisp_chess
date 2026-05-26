// Klasa reprezentująca wieżę
class Rook {
    constructor() {
        this.type = "ROOK";
    }

    validateMove(move) {
        const { startX, startY, endX, endY } = move;

        // 1. Sprawdzenie, czy figura faktycznie się poruszyła
        if (startX === endX && startY === endY) {
            return false;
        }

        // 2. Ruch jest prawidłowy, jeśli zmienia się TYLKO X (ruch poziomy) 
        //    LUB zmienia się TYLKO Y (ruch pionowy)
        const isHorizontalMove = startY === endY && startX !== endX;
        const isVerticalMove = startX === endX && startY !== endY;

        // Jeśli jeden z tych warunków jest prawdziwy, ruch jest geometrycznie poprawny
        return isHorizontalMove || isVerticalMove;
    }
}