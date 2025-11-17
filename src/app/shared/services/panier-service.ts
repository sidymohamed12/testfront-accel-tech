import { Injectable, signal } from '@angular/core';
import { Panier, Produit } from '../models/maillots.model';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  panierFinal = signal<Panier>(this.initialize());

  addProduit2(produit: Produit): void {
    let prix: number = produit.newPrix ? produit.newPrix : produit.prix;
    let montant: number = prix * produit.qteCom!;
    this.panierFinal.update((panier) => ({
      ...panier,
      produits: this.checkExistence(panier.produits, produit),
      total: panier.total + montant,
      date: new Date(),
    }));
  }

  checkExistence(produitList: Produit[], newProduit: Produit): Produit[] {
    let index: number = produitList.findIndex((produit) => newProduit.id === produit.id);
    if (index >= 0) {
      produitList[index].qteCom! += newProduit.qteCom!;
    } else {
      produitList.push(newProduit);
    }
    return produitList;
  }

  removeProduit(id: number): void {
    this.panierFinal.update((panier) => {
      let index: number = panier.produits.findIndex((produit) => produit.id === id);
      if (index >= 0) {
        let prix: number = panier.produits[index].newPrix
          ? panier.produits[index].newPrix
          : panier.produits[index].prix;

        panier.total -= prix * panier.produits[index].qteCom!;
        panier.produits.splice(index, 1);
      }
      return panier;
    });
  }

  // Nouvelle méthode pour modifier la quantité
  updateQuantity(id: number, newQuantity: number): void {
    if (newQuantity < 1) newQuantity = 1;

    this.panierFinal.update((panier) => {
      const index = panier.produits.findIndex((produit) => produit.id === id);

      if (index >= 0) {
        const produit = panier.produits[index];
        const prixUnitaire = produit.newPrix ? produit.newPrix : produit.prix;

        // Recalculer le montant total en soustrayant l'ancien montant
        panier.total -= prixUnitaire * produit.qteCom!;

        // Mettre à jour la quantité
        produit.qteCom = newQuantity;

        // Ajouter le nouveau montant
        panier.total += prixUnitaire * newQuantity;
      }

      return panier;
    });
  }

  clearPanier(): void {
    this.panierFinal.set(this.initialize());
  }

  private initialize(): Panier {
    return {
      produits: [],
      total: 0,
    };
  }
}
