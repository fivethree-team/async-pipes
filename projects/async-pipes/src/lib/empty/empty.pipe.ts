import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'empty',
  pure: true
})
export class EmptyPipe<T> implements PipeTransform {
  transform(stream: Observable<T[] | string>): Observable<boolean> {
    if (!stream) {
      return;
    }
    return stream.pipe(
      map(values => (values || '').length),
      map((value: boolean | number) => !value)
    );
  }
}
