import { Component } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  numbers$: Observable<number[]>;
  numbersEmpty$: Observable<number[]>;
  numbersError$: Observable<number[]>;

  helloWorld$: Observable<string>;
  helloWorldEmpty$: Observable<string>;
  helloWorldError$: Observable<string>;

  constructor() {}

  ionViewWillEnter() {
    this.setupObservable();
  }

  private setupObservable() {
    this.numbers$ = of([1, 2, 3, 4, 5]).pipe(delay(5000));

    this.numbersEmpty$ = of([]).pipe(delay(5000));

    this.numbersError$ = of([1, 2, 3, 4, 5]).pipe(
      delay(5000),
      flatMap(() => throwError('ups'))
    );

    this.helloWorld$ = of('Hello World!').pipe(delay(5000));

    this.helloWorldEmpty$ = of(null).pipe(delay(5000));

    this.helloWorldError$ = of('Hello World!').pipe(
      delay(5000),
      flatMap(() => throwError('ups'))
    );
  }

  onClick() {
    this.setupObservable();
  }
}
