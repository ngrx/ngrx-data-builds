/**
 * @fileoverview added by tsickle
 * Generated from: src/actions/entity-action.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Action concerning an entity collection.
 * @record
 * @template P
 */
export function EntityAction() { }
if (false) {
    /** @type {?} */
    EntityAction.prototype.type;
    /** @type {?} */
    EntityAction.prototype.payload;
}
/**
 * Options of an EntityAction
 * @record
 */
export function EntityActionOptions() { }
if (false) {
    /**
     * Correlate related EntityActions, particularly related saves. Must be serializable.
     * @type {?|undefined}
     */
    EntityActionOptions.prototype.correlationId;
    /**
     * True if should perform action optimistically (before server responds)
     * @type {?|undefined}
     */
    EntityActionOptions.prototype.isOptimistic;
    /** @type {?|undefined} */
    EntityActionOptions.prototype.mergeStrategy;
    /**
     * The tag to use in the action's type. The entityName if no tag specified.
     * @type {?|undefined}
     */
    EntityActionOptions.prototype.tag;
    /**
     * The action was determined (usually by a reducer) to be in error.
     * Downstream effects should not process but rather treat it as an error.
     * @type {?|undefined}
     */
    EntityActionOptions.prototype.error;
    /**
     * Downstream effects should skip processing this action but should return
     * an innocuous Observable<Action> of success.
     * @type {?|undefined}
     */
    EntityActionOptions.prototype.skip;
}
/**
 * Payload of an EntityAction
 * @record
 * @template P
 */
export function EntityActionPayload() { }
if (false) {
    /** @type {?} */
    EntityActionPayload.prototype.entityName;
    /** @type {?} */
    EntityActionPayload.prototype.entityOp;
    /** @type {?|undefined} */
    EntityActionPayload.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9tb2R1bGVzL2RhdGEvIiwic291cmNlcyI6WyJzcmMvYWN0aW9ucy9lbnRpdHktYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxrQ0FHQzs7O0lBRkMsNEJBQXNCOztJQUN0QiwrQkFBeUM7Ozs7OztBQUkzQyx5Q0F3QkM7Ozs7OztJQXRCQyw0Q0FBNkI7Ozs7O0lBRTdCLDJDQUFnQzs7SUFDaEMsNENBQXVDOzs7OztJQUV2QyxrQ0FBc0I7Ozs7OztJQVV0QixvQ0FBYzs7Ozs7O0lBTWQsbUNBQWU7Ozs7Ozs7QUFJakIseUNBSUM7OztJQUhDLHlDQUE0Qjs7SUFDNUIsdUNBQTRCOztJQUM1QixtQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEVudGl0eU9wIH0gZnJvbSAnLi9lbnRpdHktb3AnO1xuaW1wb3J0IHsgTWVyZ2VTdHJhdGVneSB9IGZyb20gJy4vbWVyZ2Utc3RyYXRlZ3knO1xuXG4vKiogQWN0aW9uIGNvbmNlcm5pbmcgYW4gZW50aXR5IGNvbGxlY3Rpb24uICovXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eUFjdGlvbjxQID0gYW55PiBleHRlbmRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgcmVhZG9ubHkgcGF5bG9hZDogRW50aXR5QWN0aW9uUGF5bG9hZDxQPjtcbn1cblxuLyoqIE9wdGlvbnMgb2YgYW4gRW50aXR5QWN0aW9uICovXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eUFjdGlvbk9wdGlvbnMge1xuICAvKiogQ29ycmVsYXRlIHJlbGF0ZWQgRW50aXR5QWN0aW9ucywgcGFydGljdWxhcmx5IHJlbGF0ZWQgc2F2ZXMuIE11c3QgYmUgc2VyaWFsaXphYmxlLiAqL1xuICByZWFkb25seSBjb3JyZWxhdGlvbklkPzogYW55O1xuICAvKiogVHJ1ZSBpZiBzaG91bGQgcGVyZm9ybSBhY3Rpb24gb3B0aW1pc3RpY2FsbHkgKGJlZm9yZSBzZXJ2ZXIgcmVzcG9uZHMpICovXG4gIHJlYWRvbmx5IGlzT3B0aW1pc3RpYz86IGJvb2xlYW47XG4gIHJlYWRvbmx5IG1lcmdlU3RyYXRlZ3k/OiBNZXJnZVN0cmF0ZWd5O1xuICAvKiogVGhlIHRhZyB0byB1c2UgaW4gdGhlIGFjdGlvbidzIHR5cGUuIFRoZSBlbnRpdHlOYW1lIGlmIG5vIHRhZyBzcGVjaWZpZWQuICovXG4gIHJlYWRvbmx5IHRhZz86IHN0cmluZztcblxuICAvLyBNdXRhYmxlIGFjdGlvbnMgYXJlIEJBRC5cbiAgLy8gVW5mb3J0dW5hdGVseSwgdGhlc2UgbXV0YXRpb25zIGFyZSB0aGUgb25seSB3YXkgdG8gc3RvcCBAbmdyeC9lZmZlY3RzXG4gIC8vIGZyb20gcHJvY2Vzc2luZyB0aGVzZSBhY3Rpb25zLlxuXG4gIC8qKlxuICAgKiBUaGUgYWN0aW9uIHdhcyBkZXRlcm1pbmVkICh1c3VhbGx5IGJ5IGEgcmVkdWNlcikgdG8gYmUgaW4gZXJyb3IuXG4gICAqIERvd25zdHJlYW0gZWZmZWN0cyBzaG91bGQgbm90IHByb2Nlc3MgYnV0IHJhdGhlciB0cmVhdCBpdCBhcyBhbiBlcnJvci5cbiAgICovXG4gIGVycm9yPzogRXJyb3I7XG5cbiAgLyoqXG4gICAqIERvd25zdHJlYW0gZWZmZWN0cyBzaG91bGQgc2tpcCBwcm9jZXNzaW5nIHRoaXMgYWN0aW9uIGJ1dCBzaG91bGQgcmV0dXJuXG4gICAqIGFuIGlubm9jdW91cyBPYnNlcnZhYmxlPEFjdGlvbj4gb2Ygc3VjY2Vzcy5cbiAgICovXG4gIHNraXA/OiBib29sZWFuO1xufVxuXG4vKiogUGF5bG9hZCBvZiBhbiBFbnRpdHlBY3Rpb24gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5QWN0aW9uUGF5bG9hZDxQID0gYW55PiBleHRlbmRzIEVudGl0eUFjdGlvbk9wdGlvbnMge1xuICByZWFkb25seSBlbnRpdHlOYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGVudGl0eU9wOiBFbnRpdHlPcDtcbiAgcmVhZG9ubHkgZGF0YT86IFA7XG59XG4iXX0=