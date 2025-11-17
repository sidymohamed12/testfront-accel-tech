import { Component, inject, Input } from '@angular/core';
import { PanierService } from '../../services/panier-service';
import { Produit } from '../../models/maillots.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  private readonly panierService = inject(PanierService);

  @Input({ required: true }) maillot!: Produit;

  constructor(private readonly router: Router) {}

  onAddToPanier() {
    this.maillot.qteCom = 1;
    this.panierService.addProduit2(this.maillot);
  }

  viewDetail(promoId: number) {
    this.router.navigate(['/produits', promoId]);
  }
}
