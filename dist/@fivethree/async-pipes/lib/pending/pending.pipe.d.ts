import { PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
export declare class PendingPipe<T> implements PipeTransform {
    transform(stream: Observable<T>): Observable<boolean>;
}
