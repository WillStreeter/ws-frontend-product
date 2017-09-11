"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var flex_layout_1 = require("@angular/flex-layout");
var search_ahead_component_1 = require("./search.ahead.component");
var material_1 = require("@angular/material");
var SearchAheadModule = (function () {
    function SearchAheadModule() {
    }
    return SearchAheadModule;
}());
SearchAheadModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            material_1.MaterialModule,
            flex_layout_1.FlexLayoutModule],
        declarations: [search_ahead_component_1.SearchAheadComponent],
        exports: [search_ahead_component_1.SearchAheadComponent]
    })
], SearchAheadModule);
exports.SearchAheadModule = SearchAheadModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9zZWFyY2gtYWhlYWQvc2VhcmNoLmFoZWFkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLHNDQUF5QztBQUN6Qyx3Q0FBa0U7QUFDbEUsMENBQStDO0FBQy9DLG9EQUF3RDtBQUN4RCxtRUFBZ0U7QUFDaEUsOENBQW1EO0FBYW5ELElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIsaUJBQWlCO0lBVjdCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFHLG1CQUFXO1lBQ25CLDJCQUFtQjtZQUNaLHFCQUFZO1lBQ1oseUJBQWM7WUFDZCw4QkFBZ0IsQ0FBRTtRQUM3QixZQUFZLEVBQUUsQ0FBRSw2Q0FBb0IsQ0FBRTtRQUN0QyxPQUFPLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztLQUNsQyxDQUFDO0dBRVcsaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9zZWFyY2gtYWhlYWQvc2VhcmNoLmFoZWFkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3aWxsc3RyZWV0ZXIgb24gOS8xMC8xNy5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IFNlYXJjaEFoZWFkQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2guYWhlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgICAgICAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgICAgICAgIEZsZXhMYXlvdXRNb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFsgU2VhcmNoQWhlYWRDb21wb25lbnQgXSxcbiAgICBleHBvcnRzOiBbU2VhcmNoQWhlYWRDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoQWhlYWRNb2R1bGUgeyB9XG4iXX0=
