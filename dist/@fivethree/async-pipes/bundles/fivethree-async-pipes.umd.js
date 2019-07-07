(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fivethree/async-pipes', ['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common'], factory) :
    (factory((global.fivethree = global.fivethree || {}, global.fivethree['async-pipes'] = {}),global.rxjs,global.rxjs.operators,global.ng.core,global.ng.common));
}(this, (function (exports,rxjs,operators,core,common) { 'use strict';

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
                return stream.pipe(operators.map(( /**
                 * @param {?} values
                 * @return {?}
                 */function (values) { return values.length; })), operators.map(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return !value; })));
            };
        EmptyPipe.decorators = [
            { type: core.Pipe, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [EmptyPipe],
                        imports: [common.CommonModule],
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
                return stream.pipe(operators.map(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return !value; })), operators.catchError(( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) { return rxjs.of(error); })));
            };
        ErrorPipe.decorators = [
            { type: core.Pipe, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [ErrorPipe],
                        imports: [common.CommonModule],
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
                return stream.pipe(operators.startWith(false), operators.map(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return !value; })), operators.catchError(( /**
                 * @return {?}
                 */function () { return rxjs.of(false); })));
            };
        PendingPipe.decorators = [
            { type: core.Pipe, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [PendingPipe],
                        imports: [common.CommonModule],
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

    exports.EmptyModule = EmptyModule;
    exports.ErrorModule = ErrorModule;
    exports.PendingModule = PendingModule;
    exports.ɵa = EmptyPipe;
    exports.ɵb = ErrorPipe;
    exports.ɵc = PendingPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=fivethree-async-pipes.umd.js.map