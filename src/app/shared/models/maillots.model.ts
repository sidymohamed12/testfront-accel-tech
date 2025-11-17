export interface Produit {
  id: number;
  nom: string;
  prix: number;
  newPrix: number | null;
  note: number;
  point_achat: number;
  image: string;
  qteCom?: number;
  qteStock: number;
}

export interface Panier {
  produits: Produit[];
  total: number;
}
