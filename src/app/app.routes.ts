import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { PanaderIaComponent } from './panader-ia/panader-ia';
import { DibujaGalletaComponent } from './dibuja-galleta/dibuja-galleta';
import { PortalPanaderiasComponent } from './portal-panaderias/portal-panaderias';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', redirectTo: '', pathMatch: 'full' },
  { path: 'ia', component: PanaderIaComponent },
  { path: 'dibujar', component: DibujaGalletaComponent },
  { path: 'panaderias', component: PortalPanaderiasComponent },
  { path: '**', redirectTo: '' }
];
