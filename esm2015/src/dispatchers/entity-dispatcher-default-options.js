import { Injectable } from '@angular/core';
/**
 * Default options for EntityDispatcher behavior
 * such as whether `add()` is optimistic or pessimistic by default.
 * An optimistic save modifies the collection immediately and before saving to the server.
 * A pessimistic save modifies the collection after the server confirms the save was successful.
 * This class initializes the defaults to the safest values.
 * Provide an alternative to change the defaults for all entity collections.
 */
export class EntityDispatcherDefaultOptions {
    constructor() {
        /** True if added entities are saved optimistically; false if saved pessimistically. */
        this.optimisticAdd = false;
        /** True if deleted entities are saved optimistically; false if saved pessimistically. */
        this.optimisticDelete = true;
        /** True if updated entities are saved optimistically; false if saved pessimistically. */
        this.optimisticUpdate = false;
        /** True if upsert entities are saved optimistically; false if saved pessimistically. */
        this.optimisticUpsert = false;
        /** True if entities in a cache saveEntities request are saved optimistically; false if saved pessimistically. */
        this.optimisticSaveEntities = false;
    }
}
EntityDispatcherDefaultOptions.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWRpc3BhdGNoZXItZGVmYXVsdC1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9kYXRhL3NyYy9kaXNwYXRjaGVycy9lbnRpdHktZGlzcGF0Y2hlci1kZWZhdWx0LW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQzs7Ozs7OztHQU9HO0FBRUgsTUFBTSxPQUFPLDhCQUE4QjtJQUQzQztRQUVFLHVGQUF1RjtRQUN2RixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0Qix5RkFBeUY7UUFDekYscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHlGQUF5RjtRQUN6RixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsd0ZBQXdGO1FBQ3hGLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixpSEFBaUg7UUFDakgsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7OztZQVpBLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIERlZmF1bHQgb3B0aW9ucyBmb3IgRW50aXR5RGlzcGF0Y2hlciBiZWhhdmlvclxuICogc3VjaCBhcyB3aGV0aGVyIGBhZGQoKWAgaXMgb3B0aW1pc3RpYyBvciBwZXNzaW1pc3RpYyBieSBkZWZhdWx0LlxuICogQW4gb3B0aW1pc3RpYyBzYXZlIG1vZGlmaWVzIHRoZSBjb2xsZWN0aW9uIGltbWVkaWF0ZWx5IGFuZCBiZWZvcmUgc2F2aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBBIHBlc3NpbWlzdGljIHNhdmUgbW9kaWZpZXMgdGhlIGNvbGxlY3Rpb24gYWZ0ZXIgdGhlIHNlcnZlciBjb25maXJtcyB0aGUgc2F2ZSB3YXMgc3VjY2Vzc2Z1bC5cbiAqIFRoaXMgY2xhc3MgaW5pdGlhbGl6ZXMgdGhlIGRlZmF1bHRzIHRvIHRoZSBzYWZlc3QgdmFsdWVzLlxuICogUHJvdmlkZSBhbiBhbHRlcm5hdGl2ZSB0byBjaGFuZ2UgdGhlIGRlZmF1bHRzIGZvciBhbGwgZW50aXR5IGNvbGxlY3Rpb25zLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW50aXR5RGlzcGF0Y2hlckRlZmF1bHRPcHRpb25zIHtcbiAgLyoqIFRydWUgaWYgYWRkZWQgZW50aXRpZXMgYXJlIHNhdmVkIG9wdGltaXN0aWNhbGx5OyBmYWxzZSBpZiBzYXZlZCBwZXNzaW1pc3RpY2FsbHkuICovXG4gIG9wdGltaXN0aWNBZGQgPSBmYWxzZTtcbiAgLyoqIFRydWUgaWYgZGVsZXRlZCBlbnRpdGllcyBhcmUgc2F2ZWQgb3B0aW1pc3RpY2FsbHk7IGZhbHNlIGlmIHNhdmVkIHBlc3NpbWlzdGljYWxseS4gKi9cbiAgb3B0aW1pc3RpY0RlbGV0ZSA9IHRydWU7XG4gIC8qKiBUcnVlIGlmIHVwZGF0ZWQgZW50aXRpZXMgYXJlIHNhdmVkIG9wdGltaXN0aWNhbGx5OyBmYWxzZSBpZiBzYXZlZCBwZXNzaW1pc3RpY2FsbHkuICovXG4gIG9wdGltaXN0aWNVcGRhdGUgPSBmYWxzZTtcbiAgLyoqIFRydWUgaWYgdXBzZXJ0IGVudGl0aWVzIGFyZSBzYXZlZCBvcHRpbWlzdGljYWxseTsgZmFsc2UgaWYgc2F2ZWQgcGVzc2ltaXN0aWNhbGx5LiAqL1xuICBvcHRpbWlzdGljVXBzZXJ0ID0gZmFsc2U7XG4gIC8qKiBUcnVlIGlmIGVudGl0aWVzIGluIGEgY2FjaGUgc2F2ZUVudGl0aWVzIHJlcXVlc3QgYXJlIHNhdmVkIG9wdGltaXN0aWNhbGx5OyBmYWxzZSBpZiBzYXZlZCBwZXNzaW1pc3RpY2FsbHkuICovXG4gIG9wdGltaXN0aWNTYXZlRW50aXRpZXMgPSBmYWxzZTtcbn1cbiJdfQ==