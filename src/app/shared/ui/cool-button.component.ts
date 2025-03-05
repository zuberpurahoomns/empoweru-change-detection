import { NgIf } from '@angular/common';
import {Component, Input, WritableSignal} from '@angular/core';
import {changeDetection} from "../../constant";

@Component({
  selector: 'app-cool-button',
  imports: [NgIf],
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    {{counter}}
    <button (click)="({})">CoolButtonComponent</button>
  `,
  standalone: true,
  changeDetection
})
export class CoolButtonComponent {

  @Input() counter: number = 0;

  logChangeDetection() {
    console.log('CoolButtonComponent rendered');
    return true;
  }
}
