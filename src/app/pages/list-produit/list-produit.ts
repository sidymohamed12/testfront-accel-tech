import { Component } from '@angular/core';
import { ProduitService } from '../../shared/services/produit-service';
import { Produit } from '../../shared/models/maillots.model';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-list-produit',
  imports: [ProductCard],
  templateUrl: './list-produit.html',
  styleUrl: './list-produit.css',
})
export class ListProduit {
  maillots: Produit[] = [];

  constructor(private readonly produitService: ProduitService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.maillots = this.produitService.produits;
  }
}
