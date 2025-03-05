import {NgIf} from '@angular/common';
import {Component, Input, WritableSignal} from '@angular/core';
import {CoolButtonComponent} from 'src/app/shared/ui/cool-button.component';
import {changeDetection} from "../../constant";
import {CoolButtonSiblingComponent} from "../../shared/ui/cool-button-sibling.component";

@Component({
  selector: 'app-cool-buttons',
  imports: [CoolButtonComponent, NgIf, CoolButtonSiblingComponent],
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <div style="display: flex">
      <app-cool-button [counter]="count"></app-cool-button>
      <app-cool-button-sibling [counter]="count"></app-cool-button-sibling>
    </div>

  `,
  standalone: true,
  changeDetection,
})
export class AppCoolButtonsComponent {

  @Input() count: number = 0;

  logChangeDetection() {
    console.log('CoolButtons Parent rendered');
    return true;
  }
}
