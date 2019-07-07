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
var ErrorPipe = /** @class */ (function () {
    function ErrorPipe() {
    }
    /**
     * @param {?} stream
     * @return {?}
     */
    ErrorPipe.prototype.transform = /**
     * @param {?} stream
     * @return {?}
     */
    function (stream) {
        if (!stream) {
            return;
        }
        return stream.pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return !value; })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error); })));
    };
    ErrorPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'error'
                },] }
    ];
    return ErrorPipe;
}());
export { ErrorPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvYXN5bmMtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvZXJyb3IvZXJyb3IucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRWpEO0lBQUE7SUFhQSxDQUFDOzs7OztJQVRDLDZCQUFTOzs7O0lBQVQsVUFBVSxNQUFxQjtRQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTztTQUNSO1FBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssRUFBTixDQUFNLEVBQUMsRUFDcEIsVUFBVTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFULENBQVMsRUFBQyxDQUMvQixDQUFDO0lBQ0osQ0FBQzs7Z0JBWkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxPQUFPO2lCQUNkOztJQVdELGdCQUFDO0NBQUEsQUFiRCxJQWFDO1NBVlksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2Vycm9yJ1xufSlcbmV4cG9ydCBjbGFzcyBFcnJvclBpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHN0cmVhbTogT2JzZXJ2YWJsZTxUPik6IE9ic2VydmFibGU8YW55IHwgc3RyaW5nPiB7XG4gICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmVhbS5waXBlKFxuICAgICAgbWFwKHZhbHVlID0+ICF2YWx1ZSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKGVycm9yKSlcbiAgICApO1xuICB9XG59XG4iXX0=