import { CommonModule } from '@angular/common';
import {ChangeDetectorRef, Component, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentOne } from './ui/component-one.component';
import { ComponentTwo } from './ui/component-two.component';
import {changeDetection} from "../constant";

@Component({
  selector: 'app-home',
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="detectChanges()">HomeComponent</button>
    <h2>Home page</h2>
    <app-component-one></app-component-one>
    <app-component-two></app-component-two>
  `,
  changeDetection
})
export class HomeComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  public detectChanges() {
  }

  logChangeDetection() {
    console.log('HomeComponent rendered');
    return true;
  }
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentOne,
    ComponentTwo,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeComponentModule {}
