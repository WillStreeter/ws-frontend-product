"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validation_service_1 = require("../../../business-layer/validators/services/validation.service");
var ControlMessagesComponent = (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return validation_service_1.ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return ControlMessagesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], ControlMessagesComponent.prototype, "control", void 0);
ControlMessagesComponent = __decorate([
    core_1.Component({
        selector: 'control-messages',
        styles: ['div { color:#D73117 }'],
        template: "<div *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
    })
], ControlMessagesComponent);
exports.ControlMessagesComponent = ControlMessagesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9jdXN0b20tdmFsaWRhdG9ycy9jb250cm9sLm1lc3NhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFDakQsd0NBQTZDO0FBQzdDLHFHQUFtRztBQVFuRyxJQUFhLHdCQUF3QjtJQUFyQztJQVlBLENBQUM7SUFUQyxzQkFBSSxrREFBWTthQUFoQjtZQUNFLEdBQUcsQ0FBQyxDQUFDLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDNUUsTUFBTSxDQUFDLHNDQUFpQixDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNyRyxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDOzs7T0FBQTtJQUNILCtCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFYVTtJQUFSLFlBQUssRUFBRTs4QkFBVSxtQkFBVzt5REFBQztBQURuQix3QkFBd0I7SUFOcEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDMUIsTUFBTSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDbkMsUUFBUSxFQUFFLDZEQUEyRDtLQUN0RSxDQUFDO0dBRVcsd0JBQXdCLENBWXBDO0FBWlksNERBQXdCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9jdXN0b20tdmFsaWRhdG9ycy9jb250cm9sLm1lc3NhZ2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvdmFsaWRhdG9ycy9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb250cm9sLW1lc3NhZ2VzJyxcbiAgICBzdHlsZXM6IFsnZGl2IHsgY29sb3I6I0Q3MzExNyB9J10sXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPnt7ZXJyb3JNZXNzYWdlfX08L2Rpdj5gXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbE1lc3NhZ2VzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgZ2V0IGVycm9yTWVzc2FnZSgpIHtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gdGhpcy5jb250cm9sLmVycm9ycykge1xuICAgICAgaWYodGhpcy5jb250cm9sLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIHRoaXMuY29udHJvbC50b3VjaGVkKSB7XG4gICAgICAgIHJldHVybiBWYWxpZGF0aW9uU2VydmljZS5nZXRWYWxpZGF0b3JFcnJvck1lc3NhZ2UocHJvcGVydHlOYW1lLCB0aGlzLmNvbnRyb2wuZXJyb3JzW3Byb3BlcnR5TmFtZV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=
