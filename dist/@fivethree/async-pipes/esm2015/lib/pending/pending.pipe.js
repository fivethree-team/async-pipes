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
export class PendingPipe {
    /**
     * @param {?} stream
     * @return {?}
     */
    transform(stream) {
        if (!stream) {
            return;
        }
        return stream.pipe(startWith(false), map((/**
         * @param {?} value
         * @return {?}
         */
        value => !value)), catchError((/**
         * @return {?}
         */
        () => of(false))));
    }
}
PendingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'pending',
                pure: true
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZpdmV0aHJlZS9hc3luYy1waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9wZW5kaW5nL3BlbmRpbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU01RCxNQUFNLE9BQU8sV0FBVzs7Ozs7SUFDdEIsU0FBUyxDQUFDLE1BQXFCO1FBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPO1NBQ1I7UUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQ2hCLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFDaEIsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFDcEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQzVCLENBQUM7SUFDSixDQUFDOzs7WUFkRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLElBQUk7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQFBpcGUoe1xuICBuYW1lOiAncGVuZGluZycsXG4gIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgUGVuZGluZ1BpcGU8VD4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHN0cmVhbTogT2JzZXJ2YWJsZTxUPik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGlmICghc3RyZWFtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBzdHJlYW0ucGlwZShcbiAgICAgIHN0YXJ0V2l0aChmYWxzZSksXG4gICAgICBtYXAodmFsdWUgPT4gIXZhbHVlKSxcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YoZmFsc2UpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==