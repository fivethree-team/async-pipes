import { of } from 'rxjs';
import { map, catchError, startWith } from 'rxjs/operators';
import { Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class EmptyPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmptyModule {
}
EmptyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EmptyPipe],
                imports: [CommonModule],
                exports: [EmptyPipe]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ErrorPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorModule {
}
ErrorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ErrorPipe],
                imports: [CommonModule],
                exports: [ErrorPipe],
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class PendingPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PendingModule {
}
PendingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PendingPipe],
                imports: [CommonModule],
                exports: [PendingPipe],
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EmptyModule, ErrorModule, PendingModule, EmptyPipe as ɵa, ErrorPipe as ɵb, PendingPipe as ɵc };

//# sourceMappingURL=fivethree-async-pipes.js.map