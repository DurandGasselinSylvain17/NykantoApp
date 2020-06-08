import { Produit } from './produit.model'
import { StatutProduction } from './statut-production.model'

export class Production {
   ProductionID:number
    ProduitID:number
    Date_de_modification: Date
    Date_de_creation: Date
    StatutProductionID :number
    Temps :number
    Produit:Produit
    StatutProduction: StatutProduction
}
