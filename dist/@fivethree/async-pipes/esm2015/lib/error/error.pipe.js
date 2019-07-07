/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
import { Pipe } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
/**
 * @template T
 */
export class ErrorPipe {
    /**
     * @param {?} stream
     * @return {?}
     */
    transform(stream) {
        if (!stream) {
            return;
        }
        return stream.pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        value => !value)), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error))));
    }
}
ErrorPipe.decorators = [
    { type: Pipe, args: [{
                name: 'error'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvYXN5bmMtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvZXJyb3IvZXJyb3IucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS2pELE1BQU0sT0FBTyxTQUFTOzs7OztJQUNwQixTQUFTLENBQUMsTUFBcUI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU87U0FDUjtRQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FDaEIsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFDcEIsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQy9CLENBQUM7SUFDSixDQUFDOzs7WUFaRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLE9BQU87YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2Vycm9yJ1xufSlcbmV4cG9ydCBjbGFzcyBFcnJvclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHN0cmVhbTogT2JzZXJ2YWJsZTxUPik6IE9ic2VydmFibGU8YW55IHwgc3RyaW5nPiB7XG4gICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmVhbS5waXBlKFxuICAgICAgbWFwKHZhbHVlID0+ICF2YWx1ZSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKGVycm9yKSlcbiAgICApO1xuICB9XG59XG4iXX0=