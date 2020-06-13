/**
 * @fileoverview added by tsickle
 * Generated from: src/entity-metadata/entity-filters.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Creates an {EntityFilterFn} that matches RegExp or RegExp string pattern
 * anywhere in any of the given props of an entity.
 * If pattern is a string, spaces are significant and ignores case.
 * @template T
 * @param {?=} props
 * @return {?}
 */
export function PropsFilterFnFactory(props = []) {
    if (props.length === 0) {
        // No properties -> nothing could match -> return unfiltered
        return (/**
         * @param {?} entities
         * @param {?} pattern
         * @return {?}
         */
        (entities, pattern) => entities);
    }
    return (/**
     * @param {?} entities
     * @param {?} pattern
     * @return {?}
     */
    (entities, pattern) => {
        if (!entities) {
            return [];
        }
        /** @type {?} */
        const regExp = typeof pattern === 'string' ? new RegExp(pattern, 'i') : pattern;
        if (regExp) {
            /** @type {?} */
            const predicate = (/**
             * @param {?} e
             * @return {?}
             */
            (e) => props.some((/**
             * @param {?} prop
             * @return {?}
             */
            (prop) => regExp.test(e[prop]))));
            return entities.filter(predicate);
        }
        return entities;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWZpbHRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2RhdGEvc3JjL2VudGl0eS1tZXRhZGF0YS9lbnRpdHktZmlsdGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxRQUFxQixFQUFFO0lBRXZCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdEIsNERBQTREO1FBQzVEOzs7OztRQUFPLENBQUMsUUFBYSxFQUFFLE9BQWUsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFDO0tBQ3JEO0lBRUQ7Ozs7O0lBQU8sQ0FBQyxRQUFhLEVBQUUsT0FBd0IsRUFBRSxFQUFFO1FBQ2pELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNYOztjQUVLLE1BQU0sR0FDVixPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztRQUNsRSxJQUFJLE1BQU0sRUFBRTs7a0JBQ0osU0FBUzs7OztZQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztZQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUE7WUFDeEUsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsdGVycyB0aGUgYGVudGl0aWVzYCBhcnJheSBhcmd1bWVudCBhbmQgcmV0dXJucyB0aGUgb3JpZ2luYWwgYGVudGl0aWVzYCxcbiAqIG9yIGEgbmV3IGZpbHRlcmVkIGFycmF5IG9mIGVudGl0aWVzLlxuICogTkVWRVIgbXV0YXRlIHRoZSBvcmlnaW5hbCBgZW50aXRpZXNgIGFycmF5IGl0c2VsZi5cbiAqKi9cbmV4cG9ydCB0eXBlIEVudGl0eUZpbHRlckZuPFQ+ID0gKGVudGl0aWVzOiBUW10sIHBhdHRlcm4/OiBhbnkpID0+IFRbXTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIHtFbnRpdHlGaWx0ZXJGbn0gdGhhdCBtYXRjaGVzIFJlZ0V4cCBvciBSZWdFeHAgc3RyaW5nIHBhdHRlcm5cbiAqIGFueXdoZXJlIGluIGFueSBvZiB0aGUgZ2l2ZW4gcHJvcHMgb2YgYW4gZW50aXR5LlxuICogSWYgcGF0dGVybiBpcyBhIHN0cmluZywgc3BhY2VzIGFyZSBzaWduaWZpY2FudCBhbmQgaWdub3JlcyBjYXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gUHJvcHNGaWx0ZXJGbkZhY3Rvcnk8VCA9IGFueT4oXG4gIHByb3BzOiAoa2V5b2YgVClbXSA9IFtdXG4pOiBFbnRpdHlGaWx0ZXJGbjxUPiB7XG4gIGlmIChwcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBwcm9wZXJ0aWVzIC0+IG5vdGhpbmcgY291bGQgbWF0Y2ggLT4gcmV0dXJuIHVuZmlsdGVyZWRcbiAgICByZXR1cm4gKGVudGl0aWVzOiBUW10sIHBhdHRlcm46IHN0cmluZykgPT4gZW50aXRpZXM7XG4gIH1cblxuICByZXR1cm4gKGVudGl0aWVzOiBUW10sIHBhdHRlcm46IHN0cmluZyB8IFJlZ0V4cCkgPT4ge1xuICAgIGlmICghZW50aXRpZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByZWdFeHAgPVxuICAgICAgdHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnID8gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnaScpIDogcGF0dGVybjtcbiAgICBpZiAocmVnRXhwKSB7XG4gICAgICBjb25zdCBwcmVkaWNhdGUgPSAoZTogYW55KSA9PiBwcm9wcy5zb21lKChwcm9wKSA9PiByZWdFeHAudGVzdChlW3Byb3BdKSk7XG4gICAgICByZXR1cm4gZW50aXRpZXMuZmlsdGVyKHByZWRpY2F0ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbnRpdGllcztcbiAgfTtcbn1cbiJdfQ==