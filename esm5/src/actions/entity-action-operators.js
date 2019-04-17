import { filter } from 'rxjs/operators';
import { flattenArgs } from '../utils/utilities';
export function ofEntityOp() {
    var allowedEntityOps = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedEntityOps[_i] = arguments[_i];
    }
    var ops = flattenArgs(allowedEntityOps);
    switch (ops.length) {
        case 0:
            return filter(function (action) {
                return action.payload && action.payload.entityOp != null;
            });
        case 1:
            var op_1 = ops[0];
            return filter(function (action) {
                return action.payload && op_1 === action.payload.entityOp;
            });
        default:
            return filter(function (action) {
                var entityOp = action.payload && action.payload.entityOp;
                return entityOp && ops.some(function (o) { return o === entityOp; });
            });
    }
}
export function ofEntityType() {
    var allowedEntityNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedEntityNames[_i] = arguments[_i];
    }
    var names = flattenArgs(allowedEntityNames);
    switch (names.length) {
        case 0:
            return filter(function (action) {
                return action.payload && action.payload.entityName != null;
            });
        case 1:
            var name_1 = names[0];
            return filter(function (action) {
                return action.payload && name_1 === action.payload.entityName;
            });
        default:
            return filter(function (action) {
                var entityName = action.payload && action.payload.entityName;
                return !!entityName && names.some(function (n) { return n === entityName; });
            });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWFjdGlvbi1vcGVyYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2RhdGEvc3JjL2FjdGlvbnMvZW50aXR5LWFjdGlvbi1vcGVyYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXhDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQW1CakQsTUFBTSxVQUFVLFVBQVU7SUFDeEIsMEJBQTBCO1NBQTFCLFVBQTBCLEVBQTFCLHFCQUEwQixFQUExQixJQUEwQjtRQUExQixxQ0FBMEI7O0lBRTFCLElBQU0sR0FBRyxHQUFhLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BELFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRTtRQUNsQixLQUFLLENBQUM7WUFDSixPQUFPLE1BQU0sQ0FDWCxVQUFDLE1BQW9CO2dCQUNuQixPQUFBLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtZQUFqRCxDQUFpRCxDQUNwRCxDQUFDO1FBQ0osS0FBSyxDQUFDO1lBQ0osSUFBTSxJQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sTUFBTSxDQUNYLFVBQUMsTUFBb0I7Z0JBQ25CLE9BQUEsTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFFLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQWhELENBQWdELENBQ25ELENBQUM7UUFDSjtZQUNFLE9BQU8sTUFBTSxDQUNYLFVBQUMsTUFBb0I7Z0JBQ25CLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQzNELE9BQU8sUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssUUFBUSxFQUFkLENBQWMsQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FDRixDQUFDO0tBQ0w7QUFDSCxDQUFDO0FBb0JELE1BQU0sVUFBVSxZQUFZO0lBQzFCLDRCQUE0QjtTQUE1QixVQUE0QixFQUE1QixxQkFBNEIsRUFBNUIsSUFBNEI7UUFBNUIsdUNBQTRCOztJQUU1QixJQUFNLEtBQUssR0FBYSxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxRQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDcEIsS0FBSyxDQUFDO1lBQ0osT0FBTyxNQUFNLENBQ1gsVUFBQyxNQUFvQjtnQkFDbkIsT0FBQSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLElBQUk7WUFBbkQsQ0FBbUQsQ0FDdEQsQ0FBQztRQUNKLEtBQUssQ0FBQztZQUNKLElBQU0sTUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLE1BQU0sQ0FDWCxVQUFDLE1BQW9CO2dCQUNuQixPQUFBLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBSSxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUFwRCxDQUFvRCxDQUN2RCxDQUFDO1FBQ0o7WUFDRSxPQUFPLE1BQU0sQ0FDWCxVQUFDLE1BQW9CO2dCQUNuQixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUMvRCxPQUFPLENBQUMsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxVQUFVLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQ0YsQ0FBQztLQUNMO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFbnRpdHlBY3Rpb24gfSBmcm9tICcuL2VudGl0eS1hY3Rpb24nO1xuaW1wb3J0IHsgRW50aXR5T3AgfSBmcm9tICcuL2VudGl0eS1vcCc7XG5pbXBvcnQgeyBmbGF0dGVuQXJncyB9IGZyb20gJy4uL3V0aWxzL3V0aWxpdGllcyc7XG5cbi8qKlxuICogU2VsZWN0IGFjdGlvbnMgY29uY2VybmluZyBvbmUgb2YgdGhlIGFsbG93ZWQgRW50aXR5IG9wZXJhdGlvbnNcbiAqIEBwYXJhbSBhbGxvd2VkRW50aXR5T3BzIEVudGl0eSBvcGVyYXRpb25zIChlLmcsIEVudGl0eU9wLlFVRVJZX0FMTCkgd2hvc2UgYWN0aW9ucyBzaG91bGQgYmUgc2VsZWN0ZWRcbiAqIEV4YW1wbGU6XG4gKiBgYGBcbiAqICB0aGlzLmFjdGlvbnMucGlwZShvZkVudGl0eU9wKEVudGl0eU9wLlFVRVJZX0FMTCwgRW50aXR5T3AuUVVFUllfTUFOWSksIC4uLilcbiAqICB0aGlzLmFjdGlvbnMucGlwZShvZkVudGl0eU9wKC4uLnF1ZXJ5T3BzKSwgLi4uKVxuICogIHRoaXMuYWN0aW9ucy5waXBlKG9mRW50aXR5T3AocXVlcnlPcHMpLCAuLi4pXG4gKiAgdGhpcy5hY3Rpb25zLnBpcGUob2ZFbnRpdHlPcCgpLCAuLi4pIC8vIGFueSBhY3Rpb24gd2l0aCBhIGRlZmluZWQgYGVudGl0eU9wYCBwcm9wZXJ0eVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvZkVudGl0eU9wPFQgZXh0ZW5kcyBFbnRpdHlBY3Rpb24+KFxuICBhbGxvd2VkT3BzOiBzdHJpbmdbXSB8IEVudGl0eU9wW11cbik6IE9wZXJhdG9yRnVuY3Rpb248RW50aXR5QWN0aW9uLCBUPjtcbmV4cG9ydCBmdW5jdGlvbiBvZkVudGl0eU9wPFQgZXh0ZW5kcyBFbnRpdHlBY3Rpb24+KFxuICAuLi5hbGxvd2VkT3BzOiAoc3RyaW5nIHwgRW50aXR5T3ApW11cbik6IE9wZXJhdG9yRnVuY3Rpb248RW50aXR5QWN0aW9uLCBUPjtcbmV4cG9ydCBmdW5jdGlvbiBvZkVudGl0eU9wPFQgZXh0ZW5kcyBFbnRpdHlBY3Rpb24+KFxuICAuLi5hbGxvd2VkRW50aXR5T3BzOiBhbnlbXVxuKTogT3BlcmF0b3JGdW5jdGlvbjxFbnRpdHlBY3Rpb24sIFQ+IHtcbiAgY29uc3Qgb3BzOiBzdHJpbmdbXSA9IGZsYXR0ZW5BcmdzKGFsbG93ZWRFbnRpdHlPcHMpO1xuICBzd2l0Y2ggKG9wcy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gZmlsdGVyKFxuICAgICAgICAoYWN0aW9uOiBFbnRpdHlBY3Rpb24pOiBhY3Rpb24gaXMgVCA9PlxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmVudGl0eU9wICE9IG51bGxcbiAgICAgICk7XG4gICAgY2FzZSAxOlxuICAgICAgY29uc3Qgb3AgPSBvcHNbMF07XG4gICAgICByZXR1cm4gZmlsdGVyKFxuICAgICAgICAoYWN0aW9uOiBFbnRpdHlBY3Rpb24pOiBhY3Rpb24gaXMgVCA9PlxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkICYmIG9wID09PSBhY3Rpb24ucGF5bG9hZC5lbnRpdHlPcFxuICAgICAgKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZpbHRlcihcbiAgICAgICAgKGFjdGlvbjogRW50aXR5QWN0aW9uKTogYWN0aW9uIGlzIFQgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudGl0eU9wID0gYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZW50aXR5T3A7XG4gICAgICAgICAgcmV0dXJuIGVudGl0eU9wICYmIG9wcy5zb21lKG8gPT4gbyA9PT0gZW50aXR5T3ApO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG59XG5cbi8qKlxuICogU2VsZWN0IGFjdGlvbnMgY29uY2VybmluZyBvbmUgb2YgdGhlIGFsbG93ZWQgRW50aXR5IHR5cGVzXG4gKiBAcGFyYW0gYWxsb3dlZEVudGl0eU5hbWVzIEVudGl0eS10eXBlIG5hbWVzIChlLmcsICdIZXJvJykgd2hvc2UgYWN0aW9ucyBzaG91bGQgYmUgc2VsZWN0ZWRcbiAqIEV4YW1wbGU6XG4gKiBgYGBcbiAqICB0aGlzLmFjdGlvbnMucGlwZShvZkVudGl0eVR5cGUoKSwgLi4uKSAvLyBheW4gRW50aXR5QWN0aW9uIHdpdGggYSBkZWZpbmVkIGVudGl0eSB0eXBlIHByb3BlcnR5XG4gKiAgdGhpcy5hY3Rpb25zLnBpcGUob2ZFbnRpdHlUeXBlKCdIZXJvJyksIC4uLikgLy8gRW50aXR5QWN0aW9ucyBmb3IgdGhlIEhlcm8gZW50aXR5XG4gKiAgdGhpcy5hY3Rpb25zLnBpcGUob2ZFbnRpdHlUeXBlKCdIZXJvJywgJ1ZpbGxhaW4nLCAnU2lkZWtpY2snKSwgLi4uKVxuICogIHRoaXMuYWN0aW9ucy5waXBlKG9mRW50aXR5VHlwZSguLi50aGVDaG9zZW4pLCAuLi4pXG4gKiAgdGhpcy5hY3Rpb25zLnBpcGUob2ZFbnRpdHlUeXBlKHRoZUNob3NlbiksIC4uLilcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gb2ZFbnRpdHlUeXBlPFQgZXh0ZW5kcyBFbnRpdHlBY3Rpb24+KFxuICBhbGxvd2VkRW50aXR5TmFtZXM/OiBzdHJpbmdbXVxuKTogT3BlcmF0b3JGdW5jdGlvbjxFbnRpdHlBY3Rpb24sIFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG9mRW50aXR5VHlwZTxUIGV4dGVuZHMgRW50aXR5QWN0aW9uPihcbiAgLi4uYWxsb3dlZEVudGl0eU5hbWVzOiBzdHJpbmdbXVxuKTogT3BlcmF0b3JGdW5jdGlvbjxFbnRpdHlBY3Rpb24sIFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG9mRW50aXR5VHlwZTxUIGV4dGVuZHMgRW50aXR5QWN0aW9uPihcbiAgLi4uYWxsb3dlZEVudGl0eU5hbWVzOiBhbnlbXVxuKTogT3BlcmF0b3JGdW5jdGlvbjxFbnRpdHlBY3Rpb24sIFQ+IHtcbiAgY29uc3QgbmFtZXM6IHN0cmluZ1tdID0gZmxhdHRlbkFyZ3MoYWxsb3dlZEVudGl0eU5hbWVzKTtcbiAgc3dpdGNoIChuYW1lcy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gZmlsdGVyKFxuICAgICAgICAoYWN0aW9uOiBFbnRpdHlBY3Rpb24pOiBhY3Rpb24gaXMgVCA9PlxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmVudGl0eU5hbWUgIT0gbnVsbFxuICAgICAgKTtcbiAgICBjYXNlIDE6XG4gICAgICBjb25zdCBuYW1lID0gbmFtZXNbMF07XG4gICAgICByZXR1cm4gZmlsdGVyKFxuICAgICAgICAoYWN0aW9uOiBFbnRpdHlBY3Rpb24pOiBhY3Rpb24gaXMgVCA9PlxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkICYmIG5hbWUgPT09IGFjdGlvbi5wYXlsb2FkLmVudGl0eU5hbWVcbiAgICAgICk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmaWx0ZXIoXG4gICAgICAgIChhY3Rpb246IEVudGl0eUFjdGlvbik6IGFjdGlvbiBpcyBUID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRpdHlOYW1lID0gYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZW50aXR5TmFtZTtcbiAgICAgICAgICByZXR1cm4gISFlbnRpdHlOYW1lICYmIG5hbWVzLnNvbWUobiA9PiBuID09PSBlbnRpdHlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxufVxuIl19