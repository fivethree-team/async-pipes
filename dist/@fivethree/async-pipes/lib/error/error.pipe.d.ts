import { Observable } from 'rxjs';
import { PipeTransform } from '@angular/core';
export declare class ErrorPipe<T> implements PipeTransform {
    transform(stream: Observable<T>): Observable<any | string>;
}
