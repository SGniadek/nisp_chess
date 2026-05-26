class Knight
{
    constructor()
    {
        this.type = "KNIGHT";
    }

    validateMove(move)
    {
        let legalMove = false;

        let diffX = Math.abs(move.destinationX - move.sourceX);
        let diffY = Math.abs(move.destinationY - move.sourceY);

        if ((diffX === 2 && diffY === 1) || (diffX === 1 && diffY === 2))
        {
            legalMove = true;
        }

        if (legalMove) return true;
        else return false;
    }
}