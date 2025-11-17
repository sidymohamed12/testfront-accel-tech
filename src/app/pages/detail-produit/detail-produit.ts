import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../../shared/models/maillots.model';
import { PanierService } from '../../shared/services/panier-service';
import { ProduitService } from '../../shared/services/produit-service';

@Component({
  selector: 'app-detail-produit',
  imports: [],
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
  qteCom: number = 1;

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.produitDetail = this.produitService.produits.find((p) => p.id == id)!;
  }

  onAddToPanier() {
    this.panierService.addProduit2(this.produitDetail);
    this.router.navigateByUrl('/panier');
  }
}
