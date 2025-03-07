import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, Routes} from "@angular/router";

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./app/home/home.component').then((m) => m.HomeComponentModule),
  },
  {
    path: 'form-validation',
    loadComponent: () =>
      import('./app/form-validation/form-validate.component').then(c => c.FormValidateComponent)
  },
  {
    path: '',
    redirectTo: 'form-validation',
    pathMatch: 'full',
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // provideExperimentalZonelessChangeDetection()
  ],
})
