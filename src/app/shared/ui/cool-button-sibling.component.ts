import {NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {changeDetection} from "../../constant";

@Component({
  selector: 'app-cool-button-sibling',
  imports: [NgIf],
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    {{counter}}
    <button (click)="({})">CoolButtonSiblingComponent</button>
  `,
  standalone: true,
  changeDetection,
})
export class CoolButtonSiblingComponent {

  @Input() counter: number | undefined;

  logChangeDetection() {
    console.log('CoolButtonSiblingComponent rendered');
    return true;
  }
}
