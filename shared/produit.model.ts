import { Piece } from './piece.model'
import { StatutProduit } from './statut-produit.model'

export class Produit{
    ProduitID :number
    StatutProduitID :number
    PieceID :number
    CodeBarre : string
    Piece : Piece;
    StatutProduit : StatutProduit
}
