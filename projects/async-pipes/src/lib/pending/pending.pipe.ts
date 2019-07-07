import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

@Pipe({
  name: 'pending',
  pure: true
})
export class PendingPipe<T> implements PipeTransform {
  transform(stream: Observable<T[]>): Observable<boolean> {
    if (!stream) {
      return;
    }
    return stream.pipe(
      startWith(false),
      map(value => !value),
      catchError(() => of(false))
    );
  }
}
