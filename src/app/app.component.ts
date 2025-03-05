import {Component} from '@angular/core';
import {changeDetection} from "./constant";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection,
  imports: [
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
  title = 'AppComponent';

  logChangeDetection() {
    console.log('AppComponent rendered');
    return true;
  }

  changeTitle() {
    // document.querySelector('#app-component-button')!.textContent = 'app component title changed';
    this.title = 'app component title changed';
  }
}
