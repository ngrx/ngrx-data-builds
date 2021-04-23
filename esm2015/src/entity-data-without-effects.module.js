import { NgModule, Inject, Injector, InjectionToken, Optional, } from '@angular/core';
import { combineReducers, ReducerManager, StoreModule, } from '@ngrx/store';
import { CorrelationIdGenerator } from './utils/correlation-id-generator';
import { EntityDispatcherDefaultOptions } from './dispatchers/entity-dispatcher-default-options';
import { EntityActionFactory } from './actions/entity-action-factory';
import { EntityCacheDispatcher } from './dispatchers/entity-cache-dispatcher';
import { entityCacheSelectorProvider } from './selectors/entity-cache-selector';
import { EntityCollectionServiceElementsFactory } from './entity-services/entity-collection-service-elements-factory';
import { EntityCollectionServiceFactory } from './entity-services/entity-collection-service-factory';
import { EntityServices } from './entity-services/entity-services';
import { EntityCollectionCreator } from './reducers/entity-collection-creator';
import { EntityCollectionReducerFactory } from './reducers/entity-collection-reducer';
import { EntityCollectionReducerMethodsFactory } from './reducers/entity-collection-reducer-methods';
import { EntityCollectionReducerRegistry } from './reducers/entity-collection-reducer-registry';
import { EntityDispatcherFactory } from './dispatchers/entity-dispatcher-factory';
import { EntityDefinitionService } from './entity-metadata/entity-definition.service';
import { EntityCacheReducerFactory } from './reducers/entity-cache-reducer';
import { ENTITY_CACHE_NAME, ENTITY_CACHE_NAME_TOKEN, ENTITY_CACHE_META_REDUCERS, ENTITY_COLLECTION_META_REDUCERS, INITIAL_ENTITY_CACHE_STATE, } from './reducers/constants';
import { DefaultLogger } from './utils/default-logger';
import { EntitySelectorsFactory } from './selectors/entity-selectors';
import { EntitySelectors$Factory } from './selectors/entity-selectors$';
import { EntityServicesBase } from './entity-services/entity-services-base';
import { EntityServicesElements } from './entity-services/entity-services-elements';
import { Logger, PLURAL_NAMES_TOKEN } from './utils/interfaces';
const ɵ0 = ENTITY_CACHE_NAME;
/**
 * Module without effects or dataservices which means no HTTP calls
 * This module helpful for internal testing.
 * Also helpful for apps that handle server access on their own and
 * therefore opt-out of @ngrx/effects for entities
 */
export class EntityDataModuleWithoutEffects {
    constructor(reducerManager, entityCacheReducerFactory, injector, 
    // optional params
    entityCacheName, initialState, metaReducers) {
        this.reducerManager = reducerManager;
        this.injector = injector;
        this.entityCacheName = entityCacheName;
        this.initialState = initialState;
        this.metaReducers = metaReducers;
        // Add the @ngrx/data feature to the Store's features
        // as Store.forFeature does for StoreFeatureModule
        const key = entityCacheName || ENTITY_CACHE_NAME;
        initialState =
            typeof initialState === 'function' ? initialState() : initialState;
        const reducers = (metaReducers || []).map((mr) => {
            return mr instanceof InjectionToken ? injector.get(mr) : mr;
        });
        this.entityCacheFeature = {
            key,
            reducers: entityCacheReducerFactory.create(),
            reducerFactory: combineReducers,
            initialState: initialState || {},
            metaReducers: reducers,
        };
        reducerManager.addFeature(this.entityCacheFeature);
    }
    static forRoot(config) {
        return {
            ngModule: EntityDataModuleWithoutEffects,
            providers: [
                {
                    provide: ENTITY_CACHE_META_REDUCERS,
                    useValue: config.entityCacheMetaReducers
                        ? config.entityCacheMetaReducers
                        : [],
                },
                {
                    provide: ENTITY_COLLECTION_META_REDUCERS,
                    useValue: config.entityCollectionMetaReducers
                        ? config.entityCollectionMetaReducers
                        : [],
                },
                {
                    provide: PLURAL_NAMES_TOKEN,
                    multi: true,
                    useValue: config.pluralNames ? config.pluralNames : {},
                },
            ],
        };
    }
    ngOnDestroy() {
        this.reducerManager.removeFeature(this.entityCacheFeature);
    }
}
EntityDataModuleWithoutEffects.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule, // rely on Store feature providers rather than Store.forFeature()
                ],
                providers: [
                    CorrelationIdGenerator,
                    EntityDispatcherDefaultOptions,
                    EntityActionFactory,
                    EntityCacheDispatcher,
                    EntityCacheReducerFactory,
                    entityCacheSelectorProvider,
                    EntityCollectionCreator,
                    EntityCollectionReducerFactory,
                    EntityCollectionReducerMethodsFactory,
                    EntityCollectionReducerRegistry,
                    EntityCollectionServiceElementsFactory,
                    EntityCollectionServiceFactory,
                    EntityDefinitionService,
                    EntityDispatcherFactory,
                    EntitySelectorsFactory,
                    EntitySelectors$Factory,
                    EntityServicesElements,
                    { provide: ENTITY_CACHE_NAME_TOKEN, useValue: ɵ0 },
                    { provide: EntityServices, useClass: EntityServicesBase },
                    { provide: Logger, useClass: DefaultLogger },
                ],
            },] }
];
/** @nocollapse */
EntityDataModuleWithoutEffects.ctorParameters = () => [
    { type: ReducerManager },
    { type: EntityCacheReducerFactory },
    { type: Injector },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ENTITY_CACHE_NAME_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [INITIAL_ENTITY_CACHE_STATE,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [ENTITY_CACHE_META_REDUCERS,] }] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWRhdGEtd2l0aG91dC1lZmZlY3RzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZGF0YS9zcmMvZW50aXR5LWRhdGEtd2l0aG91dC1lZmZlY3RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixRQUFRLEVBQ1IsY0FBYyxFQUNkLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBRUwsZUFBZSxFQUVmLGNBQWMsRUFDZCxXQUFXLEdBQ1osTUFBTSxhQUFhLENBQUM7QUFFckIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDdEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5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O1NBQ0YsQ0FBQztJQUNKLENBQUM7SUEyQ0QsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQXBHRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVcsRUFBRSxpRUFBaUU7aUJBQy9FO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxzQkFBc0I7b0JBQ3RCLDhCQUE4QjtvQkFDOUIsbUJBQW1CO29CQUNuQixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtvQkFDekIsMkJBQTJCO29CQUMzQix1QkFBdUI7b0JBQ3ZCLDhCQUE4QjtvQkFDOUIscUNBQXFDO29CQUNyQywrQkFBK0I7b0JBQy9CLHNDQUFzQztvQkFDdEMsOEJBQThCO29CQUM5Qix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxJQUFtQixFQUFFO29CQUNqRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFO29CQUN6RCxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTtpQkFDN0M7YUFDRjs7OztZQWxGQyxjQUFjO1lBc0JQLHlCQUF5QjtZQWhDaEMsUUFBUTt5Q0FnSUwsUUFBUSxZQUNSLE1BQU0sU0FBQyx1QkFBdUI7NENBRTlCLFFBQVEsWUFDUixNQUFNLFNBQUMsMEJBQTBCO3dDQUVqQyxRQUFRLFlBQ1IsTUFBTSxTQUFDLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgT3B0aW9uYWwsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFjdGlvbixcbiAgY29tYmluZVJlZHVjZXJzLFxuICBNZXRhUmVkdWNlcixcbiAgUmVkdWNlck1hbmFnZXIsXG4gIFN0b3JlTW9kdWxlLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IENvcnJlbGF0aW9uSWRHZW5lcmF0b3IgfSBmcm9tICcuL3V0aWxzL2NvcnJlbGF0aW9uLWlkLWdlbmVyYXRvcic7XG5pbXBvcnQgeyBFbnRpdHlEaXNwYXRjaGVyRGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL2Rpc3BhdGNoZXJzL2VudGl0eS1kaXNwYXRjaGVyLWRlZmF1bHQtb3B0aW9ucyc7XG5pbXBvcnQgeyBFbnRpdHlBY3Rpb24gfSBmcm9tICcuL2FjdGlvbnMvZW50aXR5LWFjdGlvbic7XG5pbXBvcnQgeyBFbnRpdHlBY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi9hY3Rpb25zL2VudGl0eS1hY3Rpb24tZmFjdG9yeSc7XG5pbXBvcnQgeyBFbnRpdHlDYWNoZSB9IGZyb20gJy4vcmVkdWNlcnMvZW50aXR5LWNhY2hlJztcbmltcG9ydCB7IEVudGl0eUNhY2hlRGlzcGF0Y2hlciB9IGZyb20gJy4vZGlzcGF0Y2hlcnMvZW50aXR5LWNhY2hlLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgZW50aXR5Q2FjaGVTZWxlY3RvclByb3ZpZGVyIH0gZnJvbSAnLi9zZWxlY3RvcnMvZW50aXR5LWNhY2hlLXNlbGVjdG9yJztcbmltcG9ydCB7IEVudGl0eUNvbGxlY3Rpb25TZXJ2aWNlRWxlbWVudHNGYWN0b3J5IH0gZnJvbSAnLi9lbnRpdHktc2VydmljZXMvZW50aXR5LWNvbGxlY3Rpb24tc2VydmljZS1lbGVtZW50cy1mYWN0b3J5JztcbmltcG9ydCB7IEVudGl0eUNvbGxlY3Rpb25TZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vZW50aXR5LXNlcnZpY2VzL2VudGl0eS1jb2xsZWN0aW9uLXNlcnZpY2UtZmFjdG9yeSc7XG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlcyB9IGZyb20gJy4vZW50aXR5LXNlcnZpY2VzL2VudGl0eS1zZXJ2aWNlcyc7XG5pbXBvcnQgeyBFbnRpdHlDb2xsZWN0aW9uIH0gZnJvbSAnLi9yZWR1Y2Vycy9lbnRpdHktY29sbGVjdGlvbic7XG5pbXBvcnQgeyBFbnRpdHlDb2xsZWN0aW9uQ3JlYXRvciB9IGZyb20gJy4vcmVkdWNlcnMvZW50aXR5LWNvbGxlY3Rpb24tY3JlYXRvcic7XG5pbXBvcnQgeyBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlckZhY3RvcnkgfSBmcm9tICcuL3JlZHVjZXJzL2VudGl0eS1jb2xsZWN0aW9uLXJlZHVjZXInO1xuaW1wb3J0IHsgRW50aXR5Q29sbGVjdGlvblJlZHVjZXJNZXRob2RzRmFjdG9yeSB9IGZyb20gJy4vcmVkdWNlcnMvZW50aXR5LWNvbGxlY3Rpb24tcmVkdWNlci1tZXRob2RzJztcbmltcG9ydCB7IEVudGl0eUNvbGxlY3Rpb25SZWR1Y2VyUmVnaXN0cnkgfSBmcm9tICcuL3JlZHVjZXJzL2VudGl0eS1jb2xsZWN0aW9uLXJlZHVjZXItcmVnaXN0cnknO1xuaW1wb3J0IHsgRW50aXR5RGlzcGF0Y2hlckZhY3RvcnkgfSBmcm9tICcuL2Rpc3BhdGNoZXJzL2VudGl0eS1kaXNwYXRjaGVyLWZhY3RvcnknO1xuaW1wb3J0IHsgRW50aXR5RGVmaW5pdGlvblNlcnZpY2UgfSBmcm9tICcuL2VudGl0eS1tZXRhZGF0YS9lbnRpdHktZGVmaW5pdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEVudGl0eU1ldGFkYXRhTWFwIH0gZnJvbSAnLi9lbnRpdHktbWV0YWRhdGEvZW50aXR5LW1ldGFkYXRhJztcbmltcG9ydCB7IEVudGl0eUNhY2hlUmVkdWNlckZhY3RvcnkgfSBmcm9tICcuL3JlZHVjZXJzL2VudGl0eS1jYWNoZS1yZWR1Y2VyJztcbmltcG9ydCB7XG4gIEVOVElUWV9DQUNIRV9OQU1FLFxuICBFTlRJVFlfQ0FDSEVfTkFNRV9UT0tFTixcbiAgRU5USVRZX0NBQ0hFX01FVEFfUkVEVUNFUlMsXG4gIEVOVElUWV9DT0xMRUNUSU9OX01FVEFfUkVEVUNFUlMsXG4gIElOSVRJQUxfRU5USVRZX0NBQ0hFX1NUQVRFLFxufSBmcm9tICcuL3JlZHVjZXJzL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IERlZmF1bHRMb2dnZXIgfSBmcm9tICcuL3V0aWxzL2RlZmF1bHQtbG9nZ2VyJztcbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yc0ZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdG9ycy9lbnRpdHktc2VsZWN0b3JzJztcbmltcG9ydCB7IEVudGl0eVNlbGVjdG9ycyRGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3RvcnMvZW50aXR5LXNlbGVjdG9ycyQnO1xuaW1wb3J0IHsgRW50aXR5U2VydmljZXNCYXNlIH0gZnJvbSAnLi9lbnRpdHktc2VydmljZXMvZW50aXR5LXNlcnZpY2VzLWJhc2UnO1xuaW1wb3J0IHsgRW50aXR5U2VydmljZXNFbGVtZW50cyB9IGZyb20gJy4vZW50aXR5LXNlcnZpY2VzL2VudGl0eS1zZXJ2aWNlcy1lbGVtZW50cyc7XG5pbXBvcnQgeyBMb2dnZXIsIFBMVVJBTF9OQU1FU19UT0tFTiB9IGZyb20gJy4vdXRpbHMvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5RGF0YU1vZHVsZUNvbmZpZyB7XG4gIGVudGl0eU1ldGFkYXRhPzogRW50aXR5TWV0YWRhdGFNYXA7XG4gIGVudGl0eUNhY2hlTWV0YVJlZHVjZXJzPzogKFxuICAgIHwgTWV0YVJlZHVjZXI8RW50aXR5Q2FjaGUsIEFjdGlvbj5cbiAgICB8IEluamVjdGlvblRva2VuPE1ldGFSZWR1Y2VyPEVudGl0eUNhY2hlLCBBY3Rpb24+PlxuICApW107XG4gIGVudGl0eUNvbGxlY3Rpb25NZXRhUmVkdWNlcnM/OiBNZXRhUmVkdWNlcjxFbnRpdHlDb2xsZWN0aW9uLCBFbnRpdHlBY3Rpb24+W107XG4gIC8vIEluaXRpYWwgRW50aXR5Q2FjaGUgc3RhdGUgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhhdCBzdGF0ZVxuICBpbml0aWFsRW50aXR5Q2FjaGVTdGF0ZT86IEVudGl0eUNhY2hlIHwgKCgpID0+IEVudGl0eUNhY2hlKTtcbiAgcGx1cmFsTmFtZXM/OiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuLyoqXG4gKiBNb2R1bGUgd2l0aG91dCBlZmZlY3RzIG9yIGRhdGFzZXJ2aWNlcyB3aGljaCBtZWFucyBubyBIVFRQIGNhbGxzXG4gKiBUaGlzIG1vZHVsZSBoZWxwZnVsIGZvciBpbnRlcm5hbCB0ZXN0aW5nLlxuICogQWxzbyBoZWxwZnVsIGZvciBhcHBzIHRoYXQgaGFuZGxlIHNlcnZlciBhY2Nlc3Mgb24gdGhlaXIgb3duIGFuZFxuICogdGhlcmVmb3JlIG9wdC1vdXQgb2YgQG5ncngvZWZmZWN0cyBmb3IgZW50aXRpZXNcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlTW9kdWxlLCAvLyByZWx5IG9uIFN0b3JlIGZlYXR1cmUgcHJvdmlkZXJzIHJhdGhlciB0aGFuIFN0b3JlLmZvckZlYXR1cmUoKVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb3JyZWxhdGlvbklkR2VuZXJhdG9yLFxuICAgIEVudGl0eURpc3BhdGNoZXJEZWZhdWx0T3B0aW9ucyxcbiAgICBFbnRpdHlBY3Rpb25GYWN0b3J5LFxuICAgIEVudGl0eUNhY2hlRGlzcGF0Y2hlcixcbiAgICBFbnRpdHlDYWNoZVJlZHVjZXJGYWN0b3J5LFxuICAgIGVudGl0eUNhY2hlU2VsZWN0b3JQcm92aWRlcixcbiAgICBFbnRpdHlDb2xsZWN0aW9uQ3JlYXRvcixcbiAgICBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlckZhY3RvcnksXG4gICAgRW50aXR5Q29sbGVjdGlvblJlZHVjZXJNZXRob2RzRmFjdG9yeSxcbiAgICBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlclJlZ2lzdHJ5LFxuICAgIEVudGl0eUNvbGxlY3Rpb25TZXJ2aWNlRWxlbWVudHNGYWN0b3J5LFxuICAgIEVudGl0eUNvbGxlY3Rpb25TZXJ2aWNlRmFjdG9yeSxcbiAgICBFbnRpdHlEZWZpbml0aW9uU2VydmljZSxcbiAgICBFbnRpdHlEaXNwYXRjaGVyRmFjdG9yeSxcbiAgICBFbnRpdHlTZWxlY3RvcnNGYWN0b3J5LFxuICAgIEVudGl0eVNlbGVjdG9ycyRGYWN0b3J5LFxuICAgIEVudGl0eVNlcnZpY2VzRWxlbWVudHMsXG4gICAgeyBwcm92aWRlOiBFTlRJVFlfQ0FDSEVfTkFNRV9UT0tFTiwgdXNlVmFsdWU6IEVOVElUWV9DQUNIRV9OQU1FIH0sXG4gICAgeyBwcm92aWRlOiBFbnRpdHlTZXJ2aWNlcywgdXNlQ2xhc3M6IEVudGl0eVNlcnZpY2VzQmFzZSB9LFxuICAgIHsgcHJvdmlkZTogTG9nZ2VyLCB1c2VDbGFzczogRGVmYXVsdExvZ2dlciB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlEYXRhTW9kdWxlV2l0aG91dEVmZmVjdHMgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVudGl0eUNhY2hlRmVhdHVyZTogYW55O1xuXG4gIHN0YXRpYyBmb3JSb290KFxuICAgIGNvbmZpZzogRW50aXR5RGF0YU1vZHVsZUNvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEVudGl0eURhdGFNb2R1bGVXaXRob3V0RWZmZWN0cz4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRW50aXR5RGF0YU1vZHVsZVdpdGhvdXRFZmZlY3RzLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBFTlRJVFlfQ0FDSEVfTUVUQV9SRURVQ0VSUyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLmVudGl0eUNhY2hlTWV0YVJlZHVjZXJzXG4gICAgICAgICAgICA/IGNvbmZpZy5lbnRpdHlDYWNoZU1ldGFSZWR1Y2Vyc1xuICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEVOVElUWV9DT0xMRUNUSU9OX01FVEFfUkVEVUNFUlMsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZy5lbnRpdHlDb2xsZWN0aW9uTWV0YVJlZHVjZXJzXG4gICAgICAgICAgICA/IGNvbmZpZy5lbnRpdHlDb2xsZWN0aW9uTWV0YVJlZHVjZXJzXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUExVUkFMX05BTUVTX1RPS0VOLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcucGx1cmFsTmFtZXMgPyBjb25maWcucGx1cmFsTmFtZXMgOiB7fSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVkdWNlck1hbmFnZXI6IFJlZHVjZXJNYW5hZ2VyLFxuICAgIGVudGl0eUNhY2hlUmVkdWNlckZhY3Rvcnk6IEVudGl0eUNhY2hlUmVkdWNlckZhY3RvcnksXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgLy8gb3B0aW9uYWwgcGFyYW1zXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEVOVElUWV9DQUNIRV9OQU1FX1RPS0VOKVxuICAgIHByaXZhdGUgZW50aXR5Q2FjaGVOYW1lOiBzdHJpbmcsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KElOSVRJQUxfRU5USVRZX0NBQ0hFX1NUQVRFKVxuICAgIHByaXZhdGUgaW5pdGlhbFN0YXRlOiBhbnksXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEVOVElUWV9DQUNIRV9NRVRBX1JFRFVDRVJTKVxuICAgIHByaXZhdGUgbWV0YVJlZHVjZXJzOiAoXG4gICAgICB8IE1ldGFSZWR1Y2VyPEVudGl0eUNhY2hlLCBBY3Rpb24+XG4gICAgICB8IEluamVjdGlvblRva2VuPE1ldGFSZWR1Y2VyPEVudGl0eUNhY2hlLCBBY3Rpb24+PlxuICAgIClbXVxuICApIHtcbiAgICAvLyBBZGQgdGhlIEBuZ3J4L2RhdGEgZmVhdHVyZSB0byB0aGUgU3RvcmUncyBmZWF0dXJlc1xuICAgIC8vIGFzIFN0b3JlLmZvckZlYXR1cmUgZG9lcyBmb3IgU3RvcmVGZWF0dXJlTW9kdWxlXG4gICAgY29uc3Qga2V5ID0gZW50aXR5Q2FjaGVOYW1lIHx8IEVOVElUWV9DQUNIRV9OQU1FO1xuXG4gICAgaW5pdGlhbFN0YXRlID1cbiAgICAgIHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgPyBpbml0aWFsU3RhdGUoKSA6IGluaXRpYWxTdGF0ZTtcblxuICAgIGNvbnN0IHJlZHVjZXJzOiBNZXRhUmVkdWNlcjxFbnRpdHlDYWNoZSwgQWN0aW9uPltdID0gKFxuICAgICAgbWV0YVJlZHVjZXJzIHx8IFtdXG4gICAgKS5tYXAoKG1yKSA9PiB7XG4gICAgICByZXR1cm4gbXIgaW5zdGFuY2VvZiBJbmplY3Rpb25Ub2tlbiA/IGluamVjdG9yLmdldChtcikgOiBtcjtcbiAgICB9KTtcblxuICAgIHRoaXMuZW50aXR5Q2FjaGVGZWF0dXJlID0ge1xuICAgICAga2V5LFxuICAgICAgcmVkdWNlcnM6IGVudGl0eUNhY2hlUmVkdWNlckZhY3RvcnkuY3JlYXRlKCksXG4gICAgICByZWR1Y2VyRmFjdG9yeTogY29tYmluZVJlZHVjZXJzLFxuICAgICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgfHwge30sXG4gICAgICBtZXRhUmVkdWNlcnM6IHJlZHVjZXJzLFxuICAgIH07XG4gICAgcmVkdWNlck1hbmFnZXIuYWRkRmVhdHVyZSh0aGlzLmVudGl0eUNhY2hlRmVhdHVyZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJlZHVjZXJNYW5hZ2VyLnJlbW92ZUZlYXR1cmUodGhpcy5lbnRpdHlDYWNoZUZlYXR1cmUpO1xuICB9XG59XG4iXX0=