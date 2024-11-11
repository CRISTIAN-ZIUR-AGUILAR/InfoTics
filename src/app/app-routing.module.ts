import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Platform } from "@ionic/angular";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'informatica',
    loadChildren: () => import('./informatica/informatica.module').then(m => m.InformaticaModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private platform: Platform) {
    // Redirecciona a la ruta 'informatica/formularios' en dispositivos móviles
    this.platform.ready().then(() => {
      if (this.platform.is('mobile') || this.platform.is('hybrid')) {
        RouterModule.forRoot([
          { path: '', redirectTo: 'informatica/formularios', pathMatch: 'full' }
        ]);
      }
    });
  }
}
