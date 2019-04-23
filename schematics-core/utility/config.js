(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@ngrx/data/schematics-core/utility/config", ["require", "exports", "@angular-devkit/schematics"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    function getWorkspacePath(host) {
        const possibleFiles = ['/angular.json', '/.angular.json'];
        const path = possibleFiles.filter(path => host.exists(path))[0];
        return path;
    }
    exports.getWorkspacePath = getWorkspacePath;
    function getWorkspace(host) {
        const path = getWorkspacePath(host);
        const configBuffer = host.read(path);
        if (configBuffer === null) {
            throw new schematics_1.SchematicsException(`Could not find (${path})`);
        }
        const config = configBuffer.toString();
        return JSON.parse(config);
    }
    exports.getWorkspace = getWorkspace;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9kYXRhL3NjaGVtYXRpY3MtY29yZS91dGlsaXR5L2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBLDJEQUF1RTtJQWtJdkUsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBVTtRQUN6QyxNQUFNLGFBQWEsR0FBRyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFELE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBTEQsNENBS0M7SUFFRCxTQUFnQixZQUFZLENBQUMsSUFBVTtRQUNyQyxNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtZQUN6QixNQUFNLElBQUksZ0NBQW1CLENBQUMsbUJBQW1CLElBQUksR0FBRyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFURCxvQ0FTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYXRpY3NFeGNlcHRpb24sIFRyZWUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBleHBlcmltZW50YWwgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5cbi8vIFRoZSBpbnRlcmZhY2VzIGJlbG93IGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgQW5ndWxhciBDTEkgY29uZmlndXJhdGlvbiBzY2hlbWFcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXItY2xpL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL0Bhbmd1bGFyL2NsaS9saWIvY29uZmlnL3NjaGVtYS5qc29uXG5leHBvcnQgaW50ZXJmYWNlIEFwcENvbmZpZyB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBhcHAuXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogRGlyZWN0b3J5IHdoZXJlIGFwcCBmaWxlcyBhcmUgcGxhY2VkLlxuICAgKi9cbiAgYXBwUm9vdD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgYXBwLlxuICAgKi9cbiAgcm9vdD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgZGlyZWN0b3J5IGZvciBidWlsZCByZXN1bHRzLlxuICAgKi9cbiAgb3V0RGlyPzogc3RyaW5nO1xuICAvKipcbiAgICogTGlzdCBvZiBhcHBsaWNhdGlvbiBhc3NldHMuXG4gICAqL1xuICBhc3NldHM/OiAoXG4gICAgfCBzdHJpbmdcbiAgICB8IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwYXR0ZXJuIHRvIG1hdGNoLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2xvYj86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkaXIgdG8gc2VhcmNoIHdpdGhpbi5cbiAgICAgICAgICovXG4gICAgICAgIGlucHV0Pzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG91dHB1dCBwYXRoIChyZWxhdGl2ZSB0byB0aGUgb3V0RGlyKS5cbiAgICAgICAgICovXG4gICAgICAgIG91dHB1dD86IHN0cmluZztcbiAgICAgIH0pW107XG4gIC8qKlxuICAgKiBVUkwgd2hlcmUgZmlsZXMgd2lsbCBiZSBkZXBsb3llZC5cbiAgICovXG4gIGRlcGxveVVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIEJhc2UgdXJsIGZvciB0aGUgYXBwbGljYXRpb24gYmVpbmcgYnVpbHQuXG4gICAqL1xuICBiYXNlSHJlZj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBydW50aW1lIHBsYXRmb3JtIG9mIHRoZSBhcHAuXG4gICAqL1xuICBwbGF0Zm9ybT86ICdicm93c2VyJyB8ICdzZXJ2ZXInO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIHN0YXJ0IEhUTUwgZmlsZS5cbiAgICovXG4gIGluZGV4Pzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIG1haW4gZW50cnktcG9pbnQgZmlsZS5cbiAgICovXG4gIG1haW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgcG9seWZpbGxzIGZpbGUuXG4gICAqL1xuICBwb2x5ZmlsbHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgdGVzdCBlbnRyeS1wb2ludCBmaWxlLlxuICAgKi9cbiAgdGVzdD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBUeXBlU2NyaXB0IGNvbmZpZ3VyYXRpb24gZmlsZS5cbiAgICovXG4gIHRzY29uZmlnPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIFR5cGVTY3JpcHQgY29uZmlndXJhdGlvbiBmaWxlIGZvciB1bml0IHRlc3RzLlxuICAgKi9cbiAgdGVzdFRzY29uZmlnPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHByZWZpeCB0byBhcHBseSB0byBnZW5lcmF0ZWQgc2VsZWN0b3JzLlxuICAgKi9cbiAgcHJlZml4Pzogc3RyaW5nO1xuICAvKipcbiAgICogRXhwZXJpbWVudGFsIHN1cHBvcnQgZm9yIGEgc2VydmljZSB3b3JrZXIgZnJvbSBAYW5ndWxhci9zZXJ2aWNlLXdvcmtlci5cbiAgICovXG4gIHNlcnZpY2VXb3JrZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogR2xvYmFsIHN0eWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYnVpbGQuXG4gICAqL1xuICBzdHlsZXM/OiAoXG4gICAgfCBzdHJpbmdcbiAgICB8IHtcbiAgICAgICAgaW5wdXQ/OiBzdHJpbmc7XG4gICAgICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICB9KVtdO1xuICAvKipcbiAgICogT3B0aW9ucyB0byBwYXNzIHRvIHN0eWxlIHByZXByb2Nlc3NvcnNcbiAgICovXG4gIHN0eWxlUHJlcHJvY2Vzc29yT3B0aW9ucz86IHtcbiAgICAvKipcbiAgICAgKiBQYXRocyB0byBpbmNsdWRlLiBQYXRocyB3aWxsIGJlIHJlc29sdmVkIHRvIHByb2plY3Qgcm9vdC5cbiAgICAgKi9cbiAgICBpbmNsdWRlUGF0aHM/OiBzdHJpbmdbXTtcbiAgfTtcbiAgLyoqXG4gICAqIEdsb2JhbCBzY3JpcHRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBidWlsZC5cbiAgICovXG4gIHNjcmlwdHM/OiAoXG4gICAgfCBzdHJpbmdcbiAgICB8IHtcbiAgICAgICAgaW5wdXQ6IHN0cmluZztcbiAgICAgICAgW25hbWU6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgIH0pW107XG4gIC8qKlxuICAgKiBTb3VyY2UgZmlsZSBmb3IgZW52aXJvbm1lbnQgY29uZmlnLlxuICAgKi9cbiAgZW52aXJvbm1lbnRTb3VyY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOYW1lIGFuZCBjb3JyZXNwb25kaW5nIGZpbGUgZm9yIGVudmlyb25tZW50IGNvbmZpZy5cbiAgICovXG4gIGVudmlyb25tZW50cz86IHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICB9O1xuICBhcHBTaGVsbD86IHtcbiAgICBhcHA6IHN0cmluZztcbiAgICByb3V0ZTogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBXb3Jrc3BhY2VTY2hlbWEgPSBleHBlcmltZW50YWwud29ya3NwYWNlLldvcmtzcGFjZVNjaGVtYTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcmtzcGFjZVBhdGgoaG9zdDogVHJlZSk6IHN0cmluZyB7XG4gIGNvbnN0IHBvc3NpYmxlRmlsZXMgPSBbJy9hbmd1bGFyLmpzb24nLCAnLy5hbmd1bGFyLmpzb24nXTtcbiAgY29uc3QgcGF0aCA9IHBvc3NpYmxlRmlsZXMuZmlsdGVyKHBhdGggPT4gaG9zdC5leGlzdHMocGF0aCkpWzBdO1xuXG4gIHJldHVybiBwYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V29ya3NwYWNlKGhvc3Q6IFRyZWUpOiBXb3Jrc3BhY2VTY2hlbWEge1xuICBjb25zdCBwYXRoID0gZ2V0V29ya3NwYWNlUGF0aChob3N0KTtcbiAgY29uc3QgY29uZmlnQnVmZmVyID0gaG9zdC5yZWFkKHBhdGgpO1xuICBpZiAoY29uZmlnQnVmZmVyID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFNjaGVtYXRpY3NFeGNlcHRpb24oYENvdWxkIG5vdCBmaW5kICgke3BhdGh9KWApO1xuICB9XG4gIGNvbnN0IGNvbmZpZyA9IGNvbmZpZ0J1ZmZlci50b1N0cmluZygpO1xuXG4gIHJldHVybiBKU09OLnBhcnNlKGNvbmZpZyk7XG59XG4iXX0=