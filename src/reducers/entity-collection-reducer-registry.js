(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@ngrx/data/src/reducers/entity-collection-reducer-registry", ["require", "exports", "tslib", "@angular/core", "@ngrx/store", "@ngrx/data/src/reducers/constants", "@ngrx/data/src/reducers/entity-collection-reducer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    const core_1 = require("@angular/core");
    const store_1 = require("@ngrx/store");
    const constants_1 = require("@ngrx/data/src/reducers/constants");
    const entity_collection_reducer_1 = require("@ngrx/data/src/reducers/entity-collection-reducer");
    /**
     * Registry of entity types and their previously-constructed reducers.
     * Can create a new CollectionReducer, which it registers for subsequent use.
     */
    let EntityCollectionReducerRegistry = class EntityCollectionReducerRegistry {
        constructor(entityCollectionReducerFactory, entityCollectionMetaReducers) {
            this.entityCollectionReducerFactory = entityCollectionReducerFactory;
            this.entityCollectionReducers = {};
            this.entityCollectionMetaReducer = store_1.compose.apply(null, entityCollectionMetaReducers || []);
        }
        /**
         * Get the registered EntityCollectionReducer<T> for this entity type or create one and register it.
         * @param entityName Name of the entity type for this reducer
         */
        getOrCreateReducer(entityName) {
            let reducer = this.entityCollectionReducers[entityName];
            if (!reducer) {
                reducer = this.entityCollectionReducerFactory.create(entityName);
                reducer = this.registerReducer(entityName, reducer);
                this.entityCollectionReducers[entityName] = reducer;
            }
            return reducer;
        }
        /**
         * Register an EntityCollectionReducer for an entity type
         * @param entityName - the name of the entity type
         * @param reducer - reducer for that entity type
         *
         * Examples:
         *   registerReducer('Hero', myHeroReducer);
         *   registerReducer('Villain', myVillainReducer);
         */
        registerReducer(entityName, reducer) {
            reducer = this.entityCollectionMetaReducer(reducer);
            return (this.entityCollectionReducers[entityName.trim()] = reducer);
        }
        /**
         * Register a batch of EntityCollectionReducers.
         * @param reducers - reducers to merge into existing reducers
         *
         * Examples:
         *   registerReducers({
         *     Hero: myHeroReducer,
         *     Villain: myVillainReducer
         *   });
         */
        registerReducers(reducers) {
            const keys = reducers ? Object.keys(reducers) : [];
            keys.forEach(key => this.registerReducer(key, reducers[key]));
        }
    };
    EntityCollectionReducerRegistry = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(1, core_1.Optional()),
        tslib_1.__param(1, core_1.Inject(constants_1.ENTITY_COLLECTION_META_REDUCERS)),
        tslib_1.__metadata("design:paramtypes", [entity_collection_reducer_1.EntityCollectionReducerFactory, Array])
    ], EntityCollectionReducerRegistry);
    exports.EntityCollectionReducerRegistry = EntityCollectionReducerRegistry;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWNvbGxlY3Rpb24tcmVkdWNlci1yZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZGF0YS9zcmMvcmVkdWNlcnMvZW50aXR5LWNvbGxlY3Rpb24tcmVkdWNlci1yZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQSx3Q0FBNkQ7SUFDN0QsdUNBQW1EO0lBSW5ELGlFQUE4RDtJQUM5RCxpR0FHcUM7SUFPckM7OztPQUdHO0lBRUgsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7UUFPMUMsWUFDVSw4QkFBOEQsRUFHdEUsNEJBQTRFO1lBSHBFLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7WUFQOUQsNkJBQXdCLEdBQTZCLEVBQUUsQ0FBQztZQVloRSxJQUFJLENBQUMsMkJBQTJCLEdBQUcsZUFBTyxDQUFDLEtBQUssQ0FDOUMsSUFBSSxFQUNKLDRCQUE0QixJQUFJLEVBQUUsQ0FDNUIsQ0FBQztRQUNYLENBQUM7UUFFRDs7O1dBR0c7UUFDSCxrQkFBa0IsQ0FBSSxVQUFrQjtZQUN0QyxJQUFJLE9BQU8sR0FBK0IsSUFBSSxDQUFDLHdCQUF3QixDQUNyRSxVQUFVLENBQ1gsQ0FBQztZQUVGLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUksVUFBVSxDQUFDLENBQUM7Z0JBQ3BFLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFJLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNyRDtZQUNELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7Ozs7Ozs7V0FRRztRQUNILGVBQWUsQ0FDYixVQUFrQixFQUNsQixPQUFtQztZQUVuQyxPQUFPLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQWMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUVEOzs7Ozs7Ozs7V0FTRztRQUNILGdCQUFnQixDQUFDLFFBQWtDO1lBQ2pELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FDRixDQUFBO0lBbkVZLCtCQUErQjtRQUQzQyxpQkFBVSxFQUFFO1FBVVIsbUJBQUEsZUFBUSxFQUFFLENBQUE7UUFDVixtQkFBQSxhQUFNLENBQUMsMkNBQStCLENBQUMsQ0FBQTtpREFGQSwwREFBOEI7T0FSN0QsK0JBQStCLENBbUUzQztJQW5FWSwwRUFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21wb3NlLCBNZXRhUmVkdWNlciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRW50aXR5QWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9lbnRpdHktYWN0aW9uJztcbmltcG9ydCB7IEVudGl0eUNvbGxlY3Rpb24gfSBmcm9tICcuL2VudGl0eS1jb2xsZWN0aW9uJztcbmltcG9ydCB7IEVOVElUWV9DT0xMRUNUSU9OX01FVEFfUkVEVUNFUlMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlcixcbiAgRW50aXR5Q29sbGVjdGlvblJlZHVjZXJGYWN0b3J5LFxufSBmcm9tICcuL2VudGl0eS1jb2xsZWN0aW9uLXJlZHVjZXInO1xuXG4vKiogQSBoYXNoIG9mIEVudGl0eUNvbGxlY3Rpb25SZWR1Y2VycyAqL1xuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlcnMge1xuICBbZW50aXR5OiBzdHJpbmddOiBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlcjxhbnk+O1xufVxuXG4vKipcbiAqIFJlZ2lzdHJ5IG9mIGVudGl0eSB0eXBlcyBhbmQgdGhlaXIgcHJldmlvdXNseS1jb25zdHJ1Y3RlZCByZWR1Y2Vycy5cbiAqIENhbiBjcmVhdGUgYSBuZXcgQ29sbGVjdGlvblJlZHVjZXIsIHdoaWNoIGl0IHJlZ2lzdGVycyBmb3Igc3Vic2VxdWVudCB1c2UuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlclJlZ2lzdHJ5IHtcbiAgcHJvdGVjdGVkIGVudGl0eUNvbGxlY3Rpb25SZWR1Y2VyczogRW50aXR5Q29sbGVjdGlvblJlZHVjZXJzID0ge307XG4gIHByaXZhdGUgZW50aXR5Q29sbGVjdGlvbk1ldGFSZWR1Y2VyOiBNZXRhUmVkdWNlcjxcbiAgICBFbnRpdHlDb2xsZWN0aW9uLFxuICAgIEVudGl0eUFjdGlvblxuICA+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZW50aXR5Q29sbGVjdGlvblJlZHVjZXJGYWN0b3J5OiBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlckZhY3RvcnksXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEVOVElUWV9DT0xMRUNUSU9OX01FVEFfUkVEVUNFUlMpXG4gICAgZW50aXR5Q29sbGVjdGlvbk1ldGFSZWR1Y2Vycz86IE1ldGFSZWR1Y2VyPEVudGl0eUNvbGxlY3Rpb24sIEVudGl0eUFjdGlvbj5bXVxuICApIHtcbiAgICB0aGlzLmVudGl0eUNvbGxlY3Rpb25NZXRhUmVkdWNlciA9IGNvbXBvc2UuYXBwbHkoXG4gICAgICBudWxsLFxuICAgICAgZW50aXR5Q29sbGVjdGlvbk1ldGFSZWR1Y2VycyB8fCBbXVxuICAgICkgYXMgYW55O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcmVnaXN0ZXJlZCBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlcjxUPiBmb3IgdGhpcyBlbnRpdHkgdHlwZSBvciBjcmVhdGUgb25lIGFuZCByZWdpc3RlciBpdC5cbiAgICogQHBhcmFtIGVudGl0eU5hbWUgTmFtZSBvZiB0aGUgZW50aXR5IHR5cGUgZm9yIHRoaXMgcmVkdWNlclxuICAgKi9cbiAgZ2V0T3JDcmVhdGVSZWR1Y2VyPFQ+KGVudGl0eU5hbWU6IHN0cmluZyk6IEVudGl0eUNvbGxlY3Rpb25SZWR1Y2VyPFQ+IHtcbiAgICBsZXQgcmVkdWNlcjogRW50aXR5Q29sbGVjdGlvblJlZHVjZXI8VD4gPSB0aGlzLmVudGl0eUNvbGxlY3Rpb25SZWR1Y2Vyc1tcbiAgICAgIGVudGl0eU5hbWVcbiAgICBdO1xuXG4gICAgaWYgKCFyZWR1Y2VyKSB7XG4gICAgICByZWR1Y2VyID0gdGhpcy5lbnRpdHlDb2xsZWN0aW9uUmVkdWNlckZhY3RvcnkuY3JlYXRlPFQ+KGVudGl0eU5hbWUpO1xuICAgICAgcmVkdWNlciA9IHRoaXMucmVnaXN0ZXJSZWR1Y2VyPFQ+KGVudGl0eU5hbWUsIHJlZHVjZXIpO1xuICAgICAgdGhpcy5lbnRpdHlDb2xsZWN0aW9uUmVkdWNlcnNbZW50aXR5TmFtZV0gPSByZWR1Y2VyO1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlciBmb3IgYW4gZW50aXR5IHR5cGVcbiAgICogQHBhcmFtIGVudGl0eU5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgZW50aXR5IHR5cGVcbiAgICogQHBhcmFtIHJlZHVjZXIgLSByZWR1Y2VyIGZvciB0aGF0IGVudGl0eSB0eXBlXG4gICAqXG4gICAqIEV4YW1wbGVzOlxuICAgKiAgIHJlZ2lzdGVyUmVkdWNlcignSGVybycsIG15SGVyb1JlZHVjZXIpO1xuICAgKiAgIHJlZ2lzdGVyUmVkdWNlcignVmlsbGFpbicsIG15VmlsbGFpblJlZHVjZXIpO1xuICAgKi9cbiAgcmVnaXN0ZXJSZWR1Y2VyPFQ+KFxuICAgIGVudGl0eU5hbWU6IHN0cmluZyxcbiAgICByZWR1Y2VyOiBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlcjxUPlxuICApOiBFbnRpdHlDb2xsZWN0aW9uUmVkdWNlcjxUPiB7XG4gICAgcmVkdWNlciA9IHRoaXMuZW50aXR5Q29sbGVjdGlvbk1ldGFSZWR1Y2VyKHJlZHVjZXIgYXMgYW55KTtcbiAgICByZXR1cm4gKHRoaXMuZW50aXR5Q29sbGVjdGlvblJlZHVjZXJzW2VudGl0eU5hbWUudHJpbSgpXSA9IHJlZHVjZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgYmF0Y2ggb2YgRW50aXR5Q29sbGVjdGlvblJlZHVjZXJzLlxuICAgKiBAcGFyYW0gcmVkdWNlcnMgLSByZWR1Y2VycyB0byBtZXJnZSBpbnRvIGV4aXN0aW5nIHJlZHVjZXJzXG4gICAqXG4gICAqIEV4YW1wbGVzOlxuICAgKiAgIHJlZ2lzdGVyUmVkdWNlcnMoe1xuICAgKiAgICAgSGVybzogbXlIZXJvUmVkdWNlcixcbiAgICogICAgIFZpbGxhaW46IG15VmlsbGFpblJlZHVjZXJcbiAgICogICB9KTtcbiAgICovXG4gIHJlZ2lzdGVyUmVkdWNlcnMocmVkdWNlcnM6IEVudGl0eUNvbGxlY3Rpb25SZWR1Y2Vycykge1xuICAgIGNvbnN0IGtleXMgPSByZWR1Y2VycyA/IE9iamVjdC5rZXlzKHJlZHVjZXJzKSA6IFtdO1xuICAgIGtleXMuZm9yRWFjaChrZXkgPT4gdGhpcy5yZWdpc3RlclJlZHVjZXIoa2V5LCByZWR1Y2Vyc1trZXldKSk7XG4gIH1cbn1cbiJdfQ==