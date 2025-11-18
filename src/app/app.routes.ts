import { Routes } from '@angular/router';
import { ListProduit } from './pages/list-produit/list-produit';
import { DetailProduit } from './pages/detail-produit/detail-produit';
import { Panier } from './pages/panier/panier';
import { Calendrier } from './pages/calendrier/calendrier';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  { path: 'produits', component: ListProduit },
  { path: 'produits/:id', component: DetailProduit },
  { path: 'panier', component: Panier },
  { path: 'calendrier', component: Calendrier },
  { path: 'login', component: Login },
];
