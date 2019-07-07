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
var EmptyPipe = /** @class */ (function () {
    function EmptyPipe() {
    }
    /**
     * @param {?} stream
     * @return {?}
     */
    EmptyPipe.prototype.transform = /**
     * @param {?} stream
     * @return {?}
     */
    function (stream) {
        if (!stream) {
            return;
        }
        return stream.pipe(map((/**
         * @param {?} values
         * @return {?}
         */
        function (values) { return values.length; })), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return !value; })));
    };
    EmptyPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'empty',
                    pure: true
                },] }
    ];
    return EmptyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmptyModule = /** @class */ (function () {
    function EmptyModule() {
    }
    EmptyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EmptyPipe],
                    imports: [CommonModule],
                    exports: [EmptyPipe]
                },] }
    ];
    return EmptyModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ErrorPipe],
                    imports: [CommonModule],
                    exports: [ErrorPipe],
                    providers: []
                },] }
    ];
    return ErrorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PendingModule = /** @class */ (function () {
    function PendingModule() {
    }
    PendingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PendingPipe],
                    imports: [CommonModule],
                    exports: [PendingPipe],
                    providers: []
                },] }
    ];
    return PendingModule;
}());

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