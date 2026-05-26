class Queen
{
    constructor()
    {
        this.type = "QUEEN";
    }

    validateMove(move)
    {
        let legalMove = false;
        
        let diffX = Math.abs(move.destinationX - move.sourceX);
        let diffY = Math.abs(move.destinationY - move.sourceY);

        if (move.sourceX === move.destinationX && move.sourceY !== move.destinationY)
        {
            legalMove = true;
        }

        if (move.sourceY === move.destinationY && move.sourceX !== move.destinationX)
        {
            legalMove = true;
        }

        if (diffX === diffY && diffX !== 0)
        {
            legalMove = true;
        }

        if (legalMove) return true;
        else return false;
    }
}