import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase } from './entity-collection-service-base';
import { EntityCollectionServiceElementsFactory } from './entity-collection-service-elements-factory';
/**
 * Creates EntityCollectionService instances for
 * a cached collection of T entities in the ngrx store.
 */
export class EntityCollectionServiceFactory {
    constructor(
    /** Creates the core elements of the EntityCollectionService for an entity type. */
    entityCollectionServiceElementsFactory) {
        this.entityCollectionServiceElementsFactory = entityCollectionServiceElementsFactory;
    }
    /**
     * Create an EntityCollectionService for an entity type
     * @param entityName - name of the entity type
     */
    create(entityName) {
        return new EntityCollectionServiceBase(entityName, this.entityCollectionServiceElementsFactory);
    }
}
EntityCollectionServiceFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EntityCollectionServiceFactory.ctorParameters = () => [
    { type: EntityCollectionServiceElementsFactory }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWNvbGxlY3Rpb24tc2VydmljZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9kYXRhL3NyYy9lbnRpdHktc2VydmljZXMvZW50aXR5LWNvbGxlY3Rpb24tc2VydmljZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFHdEc7OztHQUdHO0FBRUgsTUFBTSxPQUFPLDhCQUE4QjtJQUN6QztJQUNFLG1GQUFtRjtJQUM1RSxzQ0FBOEU7UUFBOUUsMkNBQXNDLEdBQXRDLHNDQUFzQyxDQUF3QztJQUNwRixDQUFDO0lBRUo7OztPQUdHO0lBQ0gsTUFBTSxDQUNKLFVBQWtCO1FBRWxCLE9BQU8sSUFBSSwyQkFBMkIsQ0FDcEMsVUFBVSxFQUNWLElBQUksQ0FBQyxzQ0FBc0MsQ0FDNUMsQ0FBQztJQUNKLENBQUM7OztZQWxCRixVQUFVOzs7O1lBUEYsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW50aXR5Q29sbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuL2VudGl0eS1jb2xsZWN0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgRW50aXR5Q29sbGVjdGlvblNlcnZpY2VCYXNlIH0gZnJvbSAnLi9lbnRpdHktY29sbGVjdGlvbi1zZXJ2aWNlLWJhc2UnO1xuaW1wb3J0IHsgRW50aXR5Q29sbGVjdGlvblNlcnZpY2VFbGVtZW50c0ZhY3RvcnkgfSBmcm9tICcuL2VudGl0eS1jb2xsZWN0aW9uLXNlcnZpY2UtZWxlbWVudHMtZmFjdG9yeSc7XG5pbXBvcnQgeyBFbnRpdHlTZWxlY3RvcnMkIH0gZnJvbSAnLi4vc2VsZWN0b3JzL2VudGl0eS1zZWxlY3RvcnMkJztcblxuLyoqXG4gKiBDcmVhdGVzIEVudGl0eUNvbGxlY3Rpb25TZXJ2aWNlIGluc3RhbmNlcyBmb3JcbiAqIGEgY2FjaGVkIGNvbGxlY3Rpb24gb2YgVCBlbnRpdGllcyBpbiB0aGUgbmdyeCBzdG9yZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGl0eUNvbGxlY3Rpb25TZXJ2aWNlRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBDcmVhdGVzIHRoZSBjb3JlIGVsZW1lbnRzIG9mIHRoZSBFbnRpdHlDb2xsZWN0aW9uU2VydmljZSBmb3IgYW4gZW50aXR5IHR5cGUuICovXG4gICAgcHVibGljIGVudGl0eUNvbGxlY3Rpb25TZXJ2aWNlRWxlbWVudHNGYWN0b3J5OiBFbnRpdHlDb2xsZWN0aW9uU2VydmljZUVsZW1lbnRzRmFjdG9yeVxuICApIHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBFbnRpdHlDb2xsZWN0aW9uU2VydmljZSBmb3IgYW4gZW50aXR5IHR5cGVcbiAgICogQHBhcmFtIGVudGl0eU5hbWUgLSBuYW1lIG9mIHRoZSBlbnRpdHkgdHlwZVxuICAgKi9cbiAgY3JlYXRlPFQsIFMkIGV4dGVuZHMgRW50aXR5U2VsZWN0b3JzJDxUPiA9IEVudGl0eVNlbGVjdG9ycyQ8VD4+KFxuICAgIGVudGl0eU5hbWU6IHN0cmluZ1xuICApOiBFbnRpdHlDb2xsZWN0aW9uU2VydmljZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBFbnRpdHlDb2xsZWN0aW9uU2VydmljZUJhc2U8VCwgUyQ+KFxuICAgICAgZW50aXR5TmFtZSxcbiAgICAgIHRoaXMuZW50aXR5Q29sbGVjdGlvblNlcnZpY2VFbGVtZW50c0ZhY3RvcnlcbiAgICApO1xuICB9XG59XG4iXX0=