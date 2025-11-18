import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../../shared/models/maillots.model';
import { PanierService } from '../../shared/services/panier-service';
import { ProduitService } from '../../shared/services/produit-service';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-detail-produit',
  imports: [FormsModule, ProductCard],
  templateUrl: './detail-produit.html',
  styleUrl: './detail-produit.css',
})
export class DetailProduit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly produitService: ProduitService,
    private readonly panierService: PanierService
  ) {}

  produitDetail!: Produit;
  Math: Math = Math;
  produitsRelatifs: Produit[] = [];
  isModalOpen: boolean = false;
  modalImageUrl: string = '';

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.produitDetail = this.produitService.produits.find((p) => p.id == id)!;
    this.produitsRelatifs = this.produitService.produits;
  }

  onAddToPanier() {
    this.panierService.addProduit2(this.produitDetail);
    this.router.navigateByUrl('/panier');
  }

  updateQuantity(id: number, newQuantity: number) {
    this.panierService.updateQuantity(id, newQuantity);
  }

  openImageModal(): void {
    this.modalImageUrl = this.produitDetail.image;
    this.isModalOpen = true;
    document.body.classList.add('overflow-hidden');
  }

  closeImageModal(): void {
    this.isModalOpen = false;
    this.modalImageUrl = '';
    // Optionnel : Retirer la classe de défilement du body
    document.body.classList.remove('overflow-hidden');
  }
}
