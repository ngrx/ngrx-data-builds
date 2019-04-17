/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, Optional, } from '@angular/core';
import { createFeatureSelector, } from '@ngrx/store';
import { ENTITY_CACHE_NAME, ENTITY_CACHE_NAME_TOKEN, } from '../reducers/constants';
/** @type {?} */
export const ENTITY_CACHE_SELECTOR_TOKEN = new InjectionToken('@ngrx/data/entity-cache-selector');
/** @type {?} */
export const entityCacheSelectorProvider = {
    provide: ENTITY_CACHE_SELECTOR_TOKEN,
    useFactory: createEntityCacheSelector,
    deps: [[new Optional(), ENTITY_CACHE_NAME_TOKEN]],
};
/**
 * @param {?=} entityCacheName
 * @return {?}
 */
export function createEntityCacheSelector(entityCacheName) {
    entityCacheName = entityCacheName || ENTITY_CACHE_NAME;
    return createFeatureSelector(entityCacheName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWNhY2hlLXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9kYXRhL3NyYy9zZWxlY3RvcnMvZW50aXR5LWNhY2hlLXNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsY0FBYyxFQUNkLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wscUJBQXFCLEdBR3RCLE1BQU0sYUFBYSxDQUFDO0FBRXJCLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sdUJBQXVCLENBQUM7O0FBRS9CLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxJQUFJLGNBQWMsQ0FFM0Qsa0NBQWtDLENBQUM7O0FBRXJDLE1BQU0sT0FBTywyQkFBMkIsR0FBb0I7SUFDMUQsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQyxVQUFVLEVBQUUseUJBQXlCO0lBQ3JDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0NBQ2xEOzs7OztBQUlELE1BQU0sVUFBVSx5QkFBeUIsQ0FDdkMsZUFBd0I7SUFFeEIsZUFBZSxHQUFHLGVBQWUsSUFBSSxpQkFBaUIsQ0FBQztJQUN2RCxPQUFPLHFCQUFxQixDQUFjLGVBQWUsQ0FBQyxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdGlvblRva2VuLFxuICBPcHRpb25hbCxcbiAgRmFjdG9yeVByb3ZpZGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIE1lbW9pemVkU2VsZWN0b3IsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVudGl0eUNhY2hlIH0gZnJvbSAnLi4vcmVkdWNlcnMvZW50aXR5LWNhY2hlJztcbmltcG9ydCB7XG4gIEVOVElUWV9DQUNIRV9OQU1FLFxuICBFTlRJVFlfQ0FDSEVfTkFNRV9UT0tFTixcbn0gZnJvbSAnLi4vcmVkdWNlcnMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IEVOVElUWV9DQUNIRV9TRUxFQ1RPUl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxcbiAgTWVtb2l6ZWRTZWxlY3RvcjxPYmplY3QsIEVudGl0eUNhY2hlPlxuPignQG5ncngvZGF0YS9lbnRpdHktY2FjaGUtc2VsZWN0b3InKTtcblxuZXhwb3J0IGNvbnN0IGVudGl0eUNhY2hlU2VsZWN0b3JQcm92aWRlcjogRmFjdG9yeVByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBFTlRJVFlfQ0FDSEVfU0VMRUNUT1JfVE9LRU4sXG4gIHVzZUZhY3Rvcnk6IGNyZWF0ZUVudGl0eUNhY2hlU2VsZWN0b3IsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIEVOVElUWV9DQUNIRV9OQU1FX1RPS0VOXV0sXG59O1xuXG5leHBvcnQgdHlwZSBFbnRpdHlDYWNoZVNlbGVjdG9yID0gTWVtb2l6ZWRTZWxlY3RvcjxPYmplY3QsIEVudGl0eUNhY2hlPjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVudGl0eUNhY2hlU2VsZWN0b3IoXG4gIGVudGl0eUNhY2hlTmFtZT86IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxPYmplY3QsIEVudGl0eUNhY2hlPiB7XG4gIGVudGl0eUNhY2hlTmFtZSA9IGVudGl0eUNhY2hlTmFtZSB8fCBFTlRJVFlfQ0FDSEVfTkFNRTtcbiAgcmV0dXJuIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxFbnRpdHlDYWNoZT4oZW50aXR5Q2FjaGVOYW1lKTtcbn1cbiJdfQ==