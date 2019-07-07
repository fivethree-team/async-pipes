/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
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
export { EmptyPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmaXZldGhyZWUvYXN5bmMtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvZW1wdHkvZW1wdHkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXJDO0lBQUE7SUFjQSxDQUFDOzs7OztJQVRDLDZCQUFTOzs7O0lBQVQsVUFBVSxNQUFnQztRQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTztTQUNSO1FBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNoQixHQUFHOzs7O1FBQUMsVUFBQyxNQUFXLElBQUssT0FBQSxNQUFNLENBQUMsTUFBTSxFQUFiLENBQWEsRUFBQyxFQUNuQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUF1QixJQUFLLE9BQUEsQ0FBQyxLQUFLLEVBQU4sQ0FBTSxFQUFDLENBQ3pDLENBQUM7SUFDSixDQUFDOztnQkFiRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE9BQU87b0JBQ2IsSUFBSSxFQUFFLElBQUk7aUJBQ1g7O0lBV0QsZ0JBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdlbXB0eScsXG4gIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgRW1wdHlQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzdHJlYW06IE9ic2VydmFibGU8VFtdIHwgc3RyaW5nPik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGlmICghc3RyZWFtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBzdHJlYW0ucGlwZShcbiAgICAgIG1hcCgodmFsdWVzOiBUW10pID0+IHZhbHVlcy5sZW5ndGgpLFxuICAgICAgbWFwKCh2YWx1ZTogYm9vbGVhbiB8IG51bWJlcikgPT4gIXZhbHVlKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==