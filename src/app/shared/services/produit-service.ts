import { Injectable } from '@angular/core';
import { Produit } from '../models/maillots.model';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: Produit[] = [
    {
      id: 1,
      nom: 'maillot 2024/2025 Domicile',
      prix: 8000,
      newPrix: 69000,
      note: 4.9,
      point_achat: 590,
      qteStock: 12,
      qteCom: 0,
      image:
        'https://www.foot-sport.com/cdn/shop/files/Maillot-Senegal-Domicile-2024-2025-9.jpg?v=1744233891',
    },
    {
      id: 2,
      nom: 'Echarpe gainde',
      prix: 12000,
      newPrix: null,
      note: 4.6,
      point_achat: 120,
      qteStock: 12,
      qteCom: 0,
      image: 'https://www.niokobok.com/142668-large_default/echarpe-senegal.jpg',
    },
    {
      id: 3,
      nom: 'maillot 2022/2023 Domicile',
      prix: 8000,
      newPrix: 69000,
      note: 4.0,
      point_achat: 350,
      qteStock: 12,
      qteCom: 0,
      image:
        'https://maillotsenegal.com/wp-content/uploads/2022/09/maillot-domicile-senegal-1.webp',
    },
    {
      id: 4,
      nom: 'Blouson Sénegal',
      prix: 50000,
      newPrix: 30000,
      note: 5.0,
      point_achat: 1000,
      qteStock: 12,
      qteCom: 0,
      image:
        'https://i.roamcdn.net/hz/ed/listing-gallery-full-1920w/689ae1853378361548e49e6618efcc0d/-/horizon-files-prod/ed/picture/q78jdrqq/fb025f027ab600e40ee36a6f87d68463bf424830.jpg',
    },
  ];
}
