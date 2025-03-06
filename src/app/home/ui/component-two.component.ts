import {ChangeDetectorRef, Component, computed, effect, Signal, signal} from '@angular/core';
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
    {{ count() }}
<app-cool-buttons [count]="count()"></app-cool-buttons>
<!--    {{ count }}-->
<!--<app-cool-buttons [count]="count"></app-cool-buttons>-->
  `,
  standalone: true,
  changeDetection,
})
export class ComponentTwo {
  // public count = 0;
  public count = signal(0);

  // If this is read in my template, it will trigger change detection
  // Else if it is used in TS code, CD will not be triggered
  // But if not used in HTML, better use a normal variable for simplicity
  public doubleCount: Signal<number> = computed(() => this.count() * 2);

  listenToCount = effect(() => {
    console.log('count changed', this.count());
  })

  constructor(
    private _cdr: ChangeDetectorRef
  ) {
    setTimeout(() => {
      // this.count++;
      this.count.update(val => ++val);
      // this._cdr.markForCheck();
    }, 1000)
  }

  increment() {
    // this.count++;
    this.count.update(val => ++val);

    // this._cdr.detectChanges();
  }

  logChangeDetection() {
    return true;
  }
}
