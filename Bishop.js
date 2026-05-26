// Klasa reprezentująca gońca
class Bishop {
    constructor() {
        this.type = "BISHOP";
    }

    validateMove(move) {
        
        let legalMove = false;
        for(let i = -7; i < 8; i++)
        {
            if (move.sourceX === move.destinationX + i && move.destinationY === move.sourceY + i) {
                legalMove = true;
            }

            if (move.sourceX === move.destinationX - i && move.destinationY === move.sourceY + i) {
                legalMove = true;
            }

        }

        if(legalMove) return true;
        else return false;
         
    }
}