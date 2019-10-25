import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'proyectos',
        loadChildren: () => import('./proyectos/proyectos.module').then(m => m.ProyectosModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
      }
    ]
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
