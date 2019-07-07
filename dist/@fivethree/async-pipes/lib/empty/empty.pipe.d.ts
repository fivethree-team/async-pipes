import { PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
export declare class EmptyPipe<T> implements PipeTransform {
    transform(stream: Observable<T[] | string>): Observable<boolean>;
}
