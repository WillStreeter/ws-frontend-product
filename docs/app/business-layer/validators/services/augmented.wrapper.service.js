"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("validator");
var getValidator = function (name, value, options) {
    if (options) {
        return validator[name](value, options) ? null : (_a = {},
            _a[name] = {
                valid: false
            },
            _a);
    }
    return validator[name](value) ? null : (_b = {},
        _b[name] = {
            valid: false
        },
        _b);
    var _a, _b;
};
function getParamValidator(name) {
    return function (options) {
        return function (c) {
            return getValidator(name, c.value, options);
        };
    };
}
exports.getParamValidator = getParamValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci92YWxpZGF0b3JzL3NlcnZpY2VzL2F1Z21lbnRlZC53cmFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxQ0FBdUM7QUFXdkMsSUFBTSxZQUFZLEdBQUcsVUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU87SUFDeEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNaLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUk7WUFDM0MsR0FBQyxJQUFJLElBQUc7Z0JBQ04sS0FBSyxFQUFFLEtBQUs7YUFDYjtlQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJO1FBQ2xDLEdBQUMsSUFBSSxJQUFHO1lBQ04sS0FBSyxFQUFFLEtBQUs7U0FDYjtXQUNGLENBQUM7O0FBQ0osQ0FBQyxDQUFDO0FBaUJGLDJCQUFrQyxJQUFZO0lBQzVDLE1BQU0sQ0FBQyxVQUFDLE9BQWE7UUFDbkIsTUFBTSxDQUFDLFVBQUMsQ0FBa0I7WUFDeEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBTkQsOENBTUMiLCJmaWxlIjoiYXBwL2J1c2luZXNzLWxheWVyL3ZhbGlkYXRvcnMvc2VydmljZXMvYXVnbWVudGVkLndyYXBwZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xuXG5cbi8qKlxuICogV3JhcHBlciBmb3IgY2FsbGluZyB2YWxpZGF0b3IganMgZnVuY3Rpb25zXG4gKlxuICogQHBhcmFtIHthbnl9IG5hbWUgbmFtZSBvZiB0aGUgdmFsaWRhdG9yIHRvIGJlIGNhbGxlZCBlLmcgaXNFbWFpbFxuICogQHBhcmFtIHthbnl9IHZhbHVlIHZhbHVlIHBhc3NlZCBmcm9tIHRoZSBhYnN0cmFjdCBjb250cm9sXG4gKiBAcGFyYW0ge2FueX0gb3B0aW9ucyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCBnZXRWYWxpZGF0b3IgPSAobmFtZSwgdmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdmFsaWRhdG9yW25hbWVdKHZhbHVlLCBvcHRpb25zKSA/IG51bGwgOiB7XG4gICAgICBbbmFtZV06IHtcbiAgICAgICAgdmFsaWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0b3JbbmFtZV0odmFsdWUpID8gbnVsbCA6IHtcbiAgICBbbmFtZV06IHtcbiAgICAgIHZhbGlkOiBmYWxzZVxuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsaWRhdG9ycyB3aXRoIHBhcmFtZXRlci5cbiAqIFBhcmFtZXRlcnMgYXJlIG9wdGlvbmFsIHNpbmNlIHNvbWUgdmFsaWRhdG9ycyBkbyBub3QgcmVxdWlyZSB0aGVtXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgdmFsaWRhdG9yXG4gKiBAcmV0dXJucyBhbmd1bGFyIGZvcm0gdmFsaWRhdG9yXG4gKi9cbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtVmFsaWRhdG9yKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gKG9wdGlvbnM/OiBhbnkpID0+IHtcbiAgICByZXR1cm4gKGM6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xuICAgICAgcmV0dXJuIGdldFZhbGlkYXRvcihuYW1lLCBjLnZhbHVlLCBvcHRpb25zKTtcbiAgICB9O1xuICB9O1xufVxuIl19
