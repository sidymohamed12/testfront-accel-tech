import { Component } from '@angular/core';
import { PanierService } from '../../shared/services/panier-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panier',
  imports: [RouterLink, FormsModule],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  constructor(public readonly panierService: PanierService, private readonly router: Router) {}

  public Math = Math;

  get produitsPanier() {
    return this.panierService.panierFinal().produits;
  }

  deleteItem(idItem: number) {
    this.panierService.removeProduit(idItem);
  }

  updateQuantity(id: number, newQuantity: number) {
    this.panierService.updateQuantity(id, newQuantity);
  }

  clearCart() {
    this.panierService.clearPanier();
  }

  viewDetail(promoId: number) {
    this.router.navigate(['/produits', promoId]);
  }
}
