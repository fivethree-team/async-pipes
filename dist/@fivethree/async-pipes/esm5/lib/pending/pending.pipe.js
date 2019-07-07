/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
/**
 * @template T
 */
var PendingPipe = /** @class */ (function () {
    function PendingPipe() {
    }
    /**
     * @param {?} stream
     * @return {?}
     */
    PendingPipe.prototype.transform = /**
     * @param {?} stream
     * @return {?}
     */
    function (stream) {
        if (!stream) {
            return;
        }
        return stream.pipe(startWith(false), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return !value; })), catchError((/**
         * @return {?}
         */
        function () { return of(false); })));
    };
    PendingPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'pending',
                    pure: true
                },] }
    ];
    return PendingPipe;
}());
export { PendingPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZpdmV0aHJlZS9hc3luYy1waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9wZW5kaW5nL3BlbmRpbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUU1RDtJQUFBO0lBZUEsQ0FBQzs7Ozs7SUFWQywrQkFBUzs7OztJQUFULFVBQVUsTUFBcUI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU87U0FDUjtRQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FDaEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUNoQixHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssRUFBTixDQUFNLEVBQUMsRUFDcEIsVUFBVTs7O1FBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBVCxDQUFTLEVBQUMsQ0FDNUIsQ0FBQztJQUNKLENBQUM7O2dCQWRGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsSUFBSTtpQkFDWDs7SUFZRCxrQkFBQztDQUFBLEFBZkQsSUFlQztTQVhZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3BlbmRpbmcnLFxuICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFBlbmRpbmdQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzdHJlYW06IE9ic2VydmFibGU8VD4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBpZiAoIXN0cmVhbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gc3RyZWFtLnBpcGUoXG4gICAgICBzdGFydFdpdGgoZmFsc2UpLFxuICAgICAgbWFwKHZhbHVlID0+ICF2YWx1ZSksXG4gICAgICBjYXRjaEVycm9yKCgpID0+IG9mKGZhbHNlKSlcbiAgICApO1xuICB9XG59XG4iXX0=