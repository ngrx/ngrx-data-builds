export var ChangeSetOperation;
(function (ChangeSetOperation) {
    ChangeSetOperation["Add"] = "Add";
    ChangeSetOperation["Delete"] = "Delete";
    ChangeSetOperation["Update"] = "Update";
    ChangeSetOperation["Upsert"] = "Upsert";
})(ChangeSetOperation || (ChangeSetOperation = {}));
/**
 * Factory to create a ChangeSetItem for a ChangeSetOperation
 */
export class ChangeSetItemFactory {
    /** Create the ChangeSetAdd for new entities of the given entity type */
    add(entityName, entities) {
        entities = Array.isArray(entities) ? entities : entities ? [entities] : [];
        return { entityName, op: ChangeSetOperation.Add, entities };
    }
    /** Create the ChangeSetDelete for primary keys of the given entity type */
    delete(entityName, keys) {
        const ids = Array.isArray(keys)
            ? keys
            : keys
                ? [keys]
                : [];
        return { entityName, op: ChangeSetOperation.Delete, entities: ids };
    }
    /** Create the ChangeSetUpdate for Updates of entities of the given entity type */
    update(entityName, updates) {
        updates = Array.isArray(updates) ? updates : updates ? [updates] : [];
        return { entityName, op: ChangeSetOperation.Update, entities: updates };
    }
    /** Create the ChangeSetUpsert for new or existing entities of the given entity type */
    upsert(entityName, entities) {
        entities = Array.isArray(entities) ? entities : entities ? [entities] : [];
        return { entityName, op: ChangeSetOperation.Upsert, entities };
    }
}
/**
 * Instance of a factory to create a ChangeSetItem for a ChangeSetOperation
 */
export const changeSetItemFactory = new ChangeSetItemFactory();
/**
 * Return ChangeSet after filtering out null and empty ChangeSetItems.
 * @param changeSet ChangeSet with changes to filter
 */
export function excludeEmptyChangeSetItems(changeSet) {
    changeSet = changeSet && changeSet.changes ? changeSet : { changes: [] };
    const changes = changeSet.changes.filter((c) => c != null && c.entities && c.entities.length > 0);
    return Object.assign(Object.assign({}, changeSet), { changes });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWNhY2hlLWNoYW5nZS1zZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2RhdGEvc3JjL2FjdGlvbnMvZW50aXR5LWNhY2hlLWNoYW5nZS1zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFOLElBQVksa0JBS1g7QUFMRCxXQUFZLGtCQUFrQjtJQUM1QixpQ0FBVyxDQUFBO0lBQ1gsdUNBQWlCLENBQUE7SUFDakIsdUNBQWlCLENBQUE7SUFDakIsdUNBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUxXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFLN0I7QUFtREQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLHdFQUF3RTtJQUN4RSxHQUFHLENBQUksVUFBa0IsRUFBRSxRQUFpQjtRQUMxQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELDJFQUEyRTtJQUMzRSxNQUFNLENBQ0osVUFBa0IsRUFDbEIsSUFBMkM7UUFFM0MsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDN0IsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUUsQ0FBQyxJQUFJLENBQXlCO2dCQUNqQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0RSxDQUFDO0lBRUQsa0ZBQWtGO0lBQ2xGLE1BQU0sQ0FDSixVQUFrQixFQUNsQixPQUFnQztRQUVoQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzFFLENBQUM7SUFFRCx1RkFBdUY7SUFDdkYsTUFBTSxDQUFJLFVBQWtCLEVBQUUsUUFBaUI7UUFDN0MsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ2pFLENBQUM7Q0FDRjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBRS9EOzs7R0FHRztBQUNILE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxTQUFvQjtJQUM3RCxTQUFTLEdBQUcsU0FBUyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDekUsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ3RDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUN4RCxDQUFDO0lBQ0YsdUNBQVksU0FBUyxLQUFFLE9BQU8sSUFBRztBQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXBkYXRlIH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuZXhwb3J0IGVudW0gQ2hhbmdlU2V0T3BlcmF0aW9uIHtcbiAgQWRkID0gJ0FkZCcsXG4gIERlbGV0ZSA9ICdEZWxldGUnLFxuICBVcGRhdGUgPSAnVXBkYXRlJyxcbiAgVXBzZXJ0ID0gJ1Vwc2VydCcsXG59XG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZVNldEFkZDxUID0gYW55PiB7XG4gIG9wOiBDaGFuZ2VTZXRPcGVyYXRpb24uQWRkO1xuICBlbnRpdHlOYW1lOiBzdHJpbmc7XG4gIGVudGl0aWVzOiBUW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlU2V0RGVsZXRlIHtcbiAgb3A6IENoYW5nZVNldE9wZXJhdGlvbi5EZWxldGU7XG4gIGVudGl0eU5hbWU6IHN0cmluZztcbiAgZW50aXRpZXM6IHN0cmluZ1tdIHwgbnVtYmVyW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlU2V0VXBkYXRlPFQgPSBhbnk+IHtcbiAgb3A6IENoYW5nZVNldE9wZXJhdGlvbi5VcGRhdGU7XG4gIGVudGl0eU5hbWU6IHN0cmluZztcbiAgZW50aXRpZXM6IFVwZGF0ZTxUPltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZVNldFVwc2VydDxUID0gYW55PiB7XG4gIG9wOiBDaGFuZ2VTZXRPcGVyYXRpb24uVXBzZXJ0O1xuICBlbnRpdHlOYW1lOiBzdHJpbmc7XG4gIGVudGl0aWVzOiBUW107XG59XG5cbi8qKlxuICogQSBlbnRpdGllcyBvZiBhIHNpbmdsZSBlbnRpdHkgdHlwZSwgd2hpY2ggYXJlIGNoYW5nZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGEgQ2hhbmdlU2V0T3BlcmF0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIENoYW5nZVNldEl0ZW0gPVxuICB8IENoYW5nZVNldEFkZFxuICB8IENoYW5nZVNldERlbGV0ZVxuICB8IENoYW5nZVNldFVwZGF0ZVxuICB8IENoYW5nZVNldFVwc2VydDtcblxuLypcbiAqIEEgc2V0IG9mIGVudGl0eSBDaGFuZ2VzLCB0eXBpY2FsbHkgdG8gYmUgc2F2ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlU2V0PFQgPSBhbnk+IHtcbiAgLyoqIEFuIGFycmF5IG9mIENoYW5nZVNldEl0ZW1zIHRvIGJlIHByb2Nlc3NlZCBpbiB0aGUgYXJyYXkgb3JkZXIgKi9cbiAgY2hhbmdlczogQ2hhbmdlU2V0SXRlbVtdO1xuXG4gIC8qKlxuICAgKiBBbiBhcmJpdHJhcnksIHNlcmlhbGl6YWJsZSBvYmplY3QgdGhhdCBzaG91bGQgdHJhdmVsIHdpdGggdGhlIENoYW5nZVNldC5cbiAgICogTWVhbmluZ2Z1bCB0byB0aGUgQ2hhbmdlU2V0IHByb2R1Y2VyIGFuZCBjb25zdW1lci4gSWdub3JlZCBieSBAbmdyeC9kYXRhLlxuICAgKi9cbiAgZXh0cmFzPzogVDtcblxuICAvKiogQW4gYXJiaXRyYXJ5IHN0cmluZywgaWRlbnRpZnlpbmcgdGhlIENoYW5nZVNldCBhbmQgcGVyaGFwcyBpdHMgcHVycG9zZSAqL1xuICB0YWc/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRmFjdG9yeSB0byBjcmVhdGUgYSBDaGFuZ2VTZXRJdGVtIGZvciBhIENoYW5nZVNldE9wZXJhdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ2hhbmdlU2V0SXRlbUZhY3Rvcnkge1xuICAvKiogQ3JlYXRlIHRoZSBDaGFuZ2VTZXRBZGQgZm9yIG5ldyBlbnRpdGllcyBvZiB0aGUgZ2l2ZW4gZW50aXR5IHR5cGUgKi9cbiAgYWRkPFQ+KGVudGl0eU5hbWU6IHN0cmluZywgZW50aXRpZXM6IFQgfCBUW10pOiBDaGFuZ2VTZXRBZGQ8VD4ge1xuICAgIGVudGl0aWVzID0gQXJyYXkuaXNBcnJheShlbnRpdGllcykgPyBlbnRpdGllcyA6IGVudGl0aWVzID8gW2VudGl0aWVzXSA6IFtdO1xuICAgIHJldHVybiB7IGVudGl0eU5hbWUsIG9wOiBDaGFuZ2VTZXRPcGVyYXRpb24uQWRkLCBlbnRpdGllcyB9O1xuICB9XG5cbiAgLyoqIENyZWF0ZSB0aGUgQ2hhbmdlU2V0RGVsZXRlIGZvciBwcmltYXJ5IGtleXMgb2YgdGhlIGdpdmVuIGVudGl0eSB0eXBlICovXG4gIGRlbGV0ZShcbiAgICBlbnRpdHlOYW1lOiBzdHJpbmcsXG4gICAga2V5czogbnVtYmVyIHwgbnVtYmVyW10gfCBzdHJpbmcgfCBzdHJpbmdbXVxuICApOiBDaGFuZ2VTZXREZWxldGUge1xuICAgIGNvbnN0IGlkcyA9IEFycmF5LmlzQXJyYXkoa2V5cylcbiAgICAgID8ga2V5c1xuICAgICAgOiBrZXlzXG4gICAgICA/IChba2V5c10gYXMgc3RyaW5nW10gfCBudW1iZXJbXSlcbiAgICAgIDogW107XG4gICAgcmV0dXJuIHsgZW50aXR5TmFtZSwgb3A6IENoYW5nZVNldE9wZXJhdGlvbi5EZWxldGUsIGVudGl0aWVzOiBpZHMgfTtcbiAgfVxuXG4gIC8qKiBDcmVhdGUgdGhlIENoYW5nZVNldFVwZGF0ZSBmb3IgVXBkYXRlcyBvZiBlbnRpdGllcyBvZiB0aGUgZ2l2ZW4gZW50aXR5IHR5cGUgKi9cbiAgdXBkYXRlPFQgZXh0ZW5kcyB7IGlkOiBzdHJpbmcgfCBudW1iZXIgfT4oXG4gICAgZW50aXR5TmFtZTogc3RyaW5nLFxuICAgIHVwZGF0ZXM6IFVwZGF0ZTxUPiB8IFVwZGF0ZTxUPltdXG4gICk6IENoYW5nZVNldFVwZGF0ZTxUPiB7XG4gICAgdXBkYXRlcyA9IEFycmF5LmlzQXJyYXkodXBkYXRlcykgPyB1cGRhdGVzIDogdXBkYXRlcyA/IFt1cGRhdGVzXSA6IFtdO1xuICAgIHJldHVybiB7IGVudGl0eU5hbWUsIG9wOiBDaGFuZ2VTZXRPcGVyYXRpb24uVXBkYXRlLCBlbnRpdGllczogdXBkYXRlcyB9O1xuICB9XG5cbiAgLyoqIENyZWF0ZSB0aGUgQ2hhbmdlU2V0VXBzZXJ0IGZvciBuZXcgb3IgZXhpc3RpbmcgZW50aXRpZXMgb2YgdGhlIGdpdmVuIGVudGl0eSB0eXBlICovXG4gIHVwc2VydDxUPihlbnRpdHlOYW1lOiBzdHJpbmcsIGVudGl0aWVzOiBUIHwgVFtdKTogQ2hhbmdlU2V0VXBzZXJ0PFQ+IHtcbiAgICBlbnRpdGllcyA9IEFycmF5LmlzQXJyYXkoZW50aXRpZXMpID8gZW50aXRpZXMgOiBlbnRpdGllcyA/IFtlbnRpdGllc10gOiBbXTtcbiAgICByZXR1cm4geyBlbnRpdHlOYW1lLCBvcDogQ2hhbmdlU2V0T3BlcmF0aW9uLlVwc2VydCwgZW50aXRpZXMgfTtcbiAgfVxufVxuXG4vKipcbiAqIEluc3RhbmNlIG9mIGEgZmFjdG9yeSB0byBjcmVhdGUgYSBDaGFuZ2VTZXRJdGVtIGZvciBhIENoYW5nZVNldE9wZXJhdGlvblxuICovXG5leHBvcnQgY29uc3QgY2hhbmdlU2V0SXRlbUZhY3RvcnkgPSBuZXcgQ2hhbmdlU2V0SXRlbUZhY3RvcnkoKTtcblxuLyoqXG4gKiBSZXR1cm4gQ2hhbmdlU2V0IGFmdGVyIGZpbHRlcmluZyBvdXQgbnVsbCBhbmQgZW1wdHkgQ2hhbmdlU2V0SXRlbXMuXG4gKiBAcGFyYW0gY2hhbmdlU2V0IENoYW5nZVNldCB3aXRoIGNoYW5nZXMgdG8gZmlsdGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGNsdWRlRW1wdHlDaGFuZ2VTZXRJdGVtcyhjaGFuZ2VTZXQ6IENoYW5nZVNldCk6IENoYW5nZVNldCB7XG4gIGNoYW5nZVNldCA9IGNoYW5nZVNldCAmJiBjaGFuZ2VTZXQuY2hhbmdlcyA/IGNoYW5nZVNldCA6IHsgY2hhbmdlczogW10gfTtcbiAgY29uc3QgY2hhbmdlcyA9IGNoYW5nZVNldC5jaGFuZ2VzLmZpbHRlcihcbiAgICAoYykgPT4gYyAhPSBudWxsICYmIGMuZW50aXRpZXMgJiYgYy5lbnRpdGllcy5sZW5ndGggPiAwXG4gICk7XG4gIHJldHVybiB7IC4uLmNoYW5nZVNldCwgY2hhbmdlcyB9O1xufVxuIl19