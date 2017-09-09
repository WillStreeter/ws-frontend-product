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
var DialogContainerComponent = (function () {
    function DialogContainerComponent(_componentFactoryResolver) {
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    DialogContainerComponent.prototype.loadComponent = function (aDialogComponent) {
        var cmp = this.createComponent(this._placeHolder, aDialogComponent);
        this._placeHolder.insert(cmp.hostView);
    };
    DialogContainerComponent.prototype.createComponent = function (vCref, type) {
        var factory = this._componentFactoryResolver.resolveComponentFactory(type);
        var injector = core_1.ReflectiveInjector.fromResolvedProviders([], vCref.parentInjector);
        var comp = factory.create(injector);
        return comp;
    };
    return DialogContainerComponent;
}());
__decorate([
    core_1.ViewChild('placeHolder', { read: core_1.ViewContainerRef }),
    __metadata("design:type", Object)
], DialogContainerComponent.prototype, "_placeHolder", void 0);
DialogContainerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dialog-container',
        templateUrl: 'dialog.container.html',
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], DialogContainerComponent);
exports.DialogContainerComponent = DialogContainerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9kaWFsb2ctY29udGFpbmVyL2RpYWxvZy5jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FLbUQ7QUFXbkQsSUFBYyx3QkFBd0I7SUFHcEMsa0NBQW9CLHlCQUFtRDtRQUFuRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO0lBQ3ZFLENBQUM7SUFHTSxnREFBYSxHQUFwQixVQUFxQixnQkFBb0I7UUFDdkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFHcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXpDLENBQUM7SUFFTSxrREFBZSxHQUF0QixVQUF3QixLQUF1QixFQUFHLElBQVE7UUFFeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRzNFLElBQUksUUFBUSxHQUFHLHlCQUFrQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFHbEYsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTFCcUQ7SUFBbkQsZ0JBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBQyxJQUFJLEVBQUUsdUJBQWdCLEVBQUMsQ0FBQzs7OERBQTBCO0FBRGpFLHdCQUF3QjtJQVByQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLHVCQUF1QjtLQUNyQyxDQUFDO3FDQU0rQywrQkFBd0I7R0FIM0Qsd0JBQXdCLENBMkJyQztBQTNCYSw0REFBd0IiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2RpYWxvZy1jb250YWluZXIvZGlhbG9nLmNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcbiAgICAgICAgIFZpZXdDaGlsZCxcbiAgICAgICAgIFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICBDb21wb25lbnRSZWYsXG4gICAgICAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICBSZWZsZWN0aXZlSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2RpYWxvZy1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy5jb250YWluZXIuaHRtbCcsXG59KVxuXG5cbmV4cG9ydCBjbGFzcyAgRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgncGxhY2VIb2xkZXInLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIHByaXZhdGUgX3BsYWNlSG9sZGVyOmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICB9XG5cblxuICBwdWJsaWMgbG9hZENvbXBvbmVudChhRGlhbG9nQ29tcG9uZW50OmFueSkge1xuICAgIGxldCBjbXAgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9wbGFjZUhvbGRlciwgYURpYWxvZ0NvbXBvbmVudCk7XG5cbiAgICAvLyBhbGwgaW5wdXRzL291dHB1dHMgc2V0PyBhZGQgaXQgdG8gdGhlIERPTSAuLlxuICAgIHRoaXMuX3BsYWNlSG9sZGVyLmluc2VydChjbXAuaG9zdFZpZXcpO1xuXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQ29tcG9uZW50ICh2Q3JlZjogVmlld0NvbnRhaW5lclJlZiwgIHR5cGU6YW55KTogQ29tcG9uZW50UmVmPGFueT4ge1xuXG4gICAgbGV0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSk7XG5cbiAgICAvLyB2Q3JlZiBpcyBuZWVkZWQgY2F1c2Ugb2YgdGhhdCBpbmplY3Rvci4uXG4gICAgbGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhbXSwgdkNyZWYucGFyZW50SW5qZWN0b3IpO1xuXG4gICAgLy8gY3JlYXRlIGNvbXBvbmVudCB3aXRob3V0IGFkZGluZyBpdCBkaXJlY3RseSB0byB0aGUgRE9NXG4gICAgbGV0IGNvbXAgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxufVxuIl19
