import { Component } from '@angular/core';
import { Observable, of, timer, throwError } from 'rxjs';
import { timeInterval, delay, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  numbers$: Observable<number[]>;

  constructor() {}

  ionViewWillEnter() {
    this.numbers$ = of([1, 2, 3, 5]).pipe(
      delay(5000)
      // flatMap(() => throwError('ups'))
    );
  }
}
