import { Pipe, PipeTransform } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Pipe({
  name: 'pending',
  pure: true
})
export class PendingPipe<T> implements PipeTransform {
  transform(stream: Observable<T[]>): Observable<boolean> {
    if (!stream) {
      return;
    }

    const bla = new BehaviorSubject(true);
    stream
      .pipe(first())
      .subscribe(() => bla.next(false), () => bla.next(false));
    return bla;
  }
}
