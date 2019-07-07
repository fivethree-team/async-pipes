import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  numbers$: Observable<string>;

  constructor() {}

  ionViewWillEnter() {
    this.numbers$ = of('').pipe(
      delay(5000)
      // flatMap(() => throwError('ups'))
    );
  }
}
