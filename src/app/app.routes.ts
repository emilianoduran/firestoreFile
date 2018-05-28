import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { RouterModule, Routes } from '@angular/router';

// Path Name://
const APP_ROUTES: Routes = [
  { path: 'fotos', component: FotosComponent },
  { path: 'carga', component: CargaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'fotos' } // Ruta por defecto
];
// Se exporta la constante que se utilizará en el archivo app.module.ts dentro de imports @ngModules[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
