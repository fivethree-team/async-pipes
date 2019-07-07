import { Observable, of } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Pipe({
  name: 'error'
})
export class ErrorPipe<T> implements PipeTransform {
  transform(stream: Observable<T>): Observable<any | string> {
    if (!stream) {
      return;
    }
    return stream.pipe(
      map(value => !value),
      catchError(error => of(error))
    );
  }
}
