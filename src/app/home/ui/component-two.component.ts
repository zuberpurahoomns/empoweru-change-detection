import {ChangeDetectorRef, Component, signal} from '@angular/core';
import {changeDetection} from "../../constant";
import {AppCoolButtonsComponent} from "../container/cool-buttons.component";

@Component({
  selector: 'app-component-two',
  imports: [  AppCoolButtonsComponent],
  template: `
    @if(logChangeDetection()) {
      <ng-container></ng-container>
    }

    <button (click)="increment()">ComponentTwo</button>
    <p>Component two</p>
<!--    {{ count() }}-->
<!--<app-cool-buttons [count]="count()"></app-cool-buttons>-->
    {{ count }}
<app-cool-buttons [count]="count"></app-cool-buttons>
  `,
  standalone: true,
  changeDetection,
})
export class ComponentTwo {
  public count = 0;
  // public count = signal(0);

  constructor(
    private _cdr: ChangeDetectorRef
  ) {
    setTimeout(() => {
      this.count++;
      // this.count.update(val => ++val);
      // this._cdr.markForCheck();
    }, 1000)
  }

  increment() {
    this.count++;
    // this.count.update(val => ++val);

    // this._cdr.detectChanges();
  }

  logChangeDetection() {
    console.log('ComponentTwo rendered');
    return true;
  }
}
