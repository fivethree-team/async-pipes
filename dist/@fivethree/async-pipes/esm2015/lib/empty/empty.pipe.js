/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
/**
 * @template T
 */
export class EmptyPipe {
    /**
     * @param {?} stream
     * @return {?}
     */
    transform(stream) {
        if (!stream) {
            return;
        }
        return stream.pipe(map((/**
         * @param {?} values
         * @return {?}
         */
        (values) => values.length)), map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => !value)));
    }
}
EmptyPipe.decorators = [
    { type: Pipe, args: [{
                name: 'empty',
                pure: true
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvYXN5bmMtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvZW1wdHkvZW1wdHkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTXJDLE1BQU0sT0FBTyxTQUFTOzs7OztJQUNwQixTQUFTLENBQUMsTUFBZ0M7UUFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU87U0FDUjtRQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FDaEIsR0FBRzs7OztRQUFDLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLEVBQ25DLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFDLENBQ3pDLENBQUM7SUFDSixDQUFDOzs7WUFiRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLElBQUk7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZW1wdHknLFxuICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5UGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oc3RyZWFtOiBPYnNlcnZhYmxlPFRbXSB8IHN0cmluZz4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBpZiAoIXN0cmVhbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gc3RyZWFtLnBpcGUoXG4gICAgICBtYXAoKHZhbHVlczogVFtdKSA9PiB2YWx1ZXMubGVuZ3RoKSxcbiAgICAgIG1hcCgodmFsdWU6IGJvb2xlYW4gfCBudW1iZXIpID0+ICF2YWx1ZSlcbiAgICApO1xuICB9XG59XG4iXX0=