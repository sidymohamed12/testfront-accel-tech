import { Produit } from './maillots.model';

export interface Commande {
  id: number;
  produits: Produit[];
}
