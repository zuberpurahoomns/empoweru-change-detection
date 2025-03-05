import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {changeDetection} from "../../constant";

@Component({
  selector: 'app-component-one',
  imports: [NgIf],
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="increment()">ComponentOne</button>
    <p>Component one</p>
    {{count}}
  `,
  standalone: true,
  changeDetection
})
export class ComponentOne {

  public count = 0;

  logChangeDetection() {
    console.log('ComponentOne rendered');
    return true;
  }

  increment() {
    this.count += 1;
  }
}
