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
var router_1 = require("@angular/router");
var augmented_validator_1 = require("../../../business-layer/validators/augmented.validator");
var email_validator_service_1 = require("../../../business-layer/validators/services/email.validator.service");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var RegistrationComponent = (function () {
    function RegistrationComponent(fb, router, bDS) {
        this.fb = fb;
        this.router = router;
        this.bDS = bDS;
        this.usernameComplete = false;
        this.validUserName = false;
        this.userNameAttempt = false;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_REGISTRATION_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutRequestedUrlSub = this.brokerRef.storeObs.layoutRequestedUrl$.subscribe(function (value) {
            _this.requestedUrl = value;
        });
        this.hasLoggedInUserSub = this.brokerRef.storeObs.hasLoggedInUser$.subscribe(function (value) {
            _this.userloggedIn = value;
            if (_this.userloggedIn) {
                if (_this.requestedUrl) {
                    _this.router.navigateByUrl(_this.requestedUrl);
                }
                else {
                    var newuserName = _this.newUser.get('name').get('username').value;
                    _this.router.navigate(['profile/username/', newuserName]);
                }
            }
        });
        this.profileStateSub = this.brokerRef.storeObs.profileState$.subscribe(function (state) {
            if (state.validUserName === 'valid') {
                _this.usernameComplete = true;
                _this.validUserName = true;
            }
            else if (state.validUserName === 'inValid') {
                _this.userNameAttempt = true;
                _this.validUserName = false;
            }
        });
        this.newUser = this.fb.group({
            name: this.fb.group({
                username: ['', [forms_1.Validators.required,
                        forms_1.Validators.minLength(5),
                        forms_1.Validators.maxLength(15),
                        augmented_validator_1.AugmentedValidators.isAlphanumeric()]],
            }),
            user: this.fb.group({
                password: ['', [forms_1.Validators.required,
                        forms_1.Validators.minLength(5),
                        forms_1.Validators.maxLength(15),
                        augmented_validator_1.AugmentedValidators.passwordPattern()]],
                firstname: ['', [forms_1.Validators.required,
                        forms_1.Validators.minLength(2),
                        forms_1.Validators.maxLength(15),
                        augmented_validator_1.AugmentedValidators.isAlpha()]],
                lastname: ['', [forms_1.Validators.required,
                        forms_1.Validators.minLength(2),
                        forms_1.Validators.maxLength(15),
                        augmented_validator_1.AugmentedValidators.isAlpha()]]
            }),
            account: this.fb.group({
                email: ['', [forms_1.Validators.required,
                        augmented_validator_1.AugmentedValidators.isEmail()]],
                confirm: ['', [forms_1.Validators.required,
                        augmented_validator_1.AugmentedValidators.isEmail()]]
            }, { validator: email_validator_service_1.emailMatcher })
        });
    };
    RegistrationComponent.prototype.resetValidUserName = function () {
        this.bDS.dispatchBrokerAction(this.brokerRef.storeDsp.RESET_USER_PROFILE_NAME_VALID);
    };
    RegistrationComponent.prototype.onUserNameOutFocused = function () {
        if (this.newUser.get('name').get('username').valid) {
            var note = this.brokerRef.storeDsp.CHECK_USER_PROFILE_NAME_ATTEMPT;
            note.payLoad = this.newUser.get('name').get('username').value;
            this.bDS.dispatchBrokerAction(note);
        }
    };
    RegistrationComponent.prototype.onUserNameKeyedUp = function () {
        if (this.usernameComplete || this.userNameAttempt) {
            if (this.usernameComplete) {
                this.userNameAttempt = false;
                this.validUserName = false;
                this.usernameComplete = false;
            }
            else if (this.userNameAttempt) {
                this.userNameAttempt = false;
            }
            this.resetValidUserName();
        }
    };
    RegistrationComponent.prototype.onSubmit = function () {
        if (this.newUser.valid) {
            var userObj = Object.assign({}, this.newUser.value.name, this.newUser.value.user, { email: this.newUser.value.account.email });
            var note = this.brokerRef.storeDsp.REGISTER_USER_ATTEMPT;
            note.payLoad = (userObj);
            this.bDS.dispatchBrokerAction(note);
        }
    };
    RegistrationComponent.prototype.ngOnDestroy = function () {
        if (this.validUserName) {
            this.resetValidUserName();
        }
        if (this.storeStateSub) {
            this.storeStateSub.unsubscribe();
        }
        if (this.profileStateSub) {
            this.profileStateSub.unsubscribe();
        }
        if (this.hasLoggedInUserSub) {
            this.hasLoggedInUserSub.unsubscribe();
        }
        if (this.layoutRequestedUrlSub) {
            this.layoutRequestedUrlSub.unsubscribe();
        }
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-registration',
        templateUrl: './registration.component.html',
        styleUrls: ['./registration.component.css'],
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        broker_dispatcher_service_1.BrokerDispatcherService])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNkQ7QUFDN0Qsd0NBQW9FO0FBQ3BFLDBDQUF5QztBQUN6Qyw4RkFBNkY7QUFDN0YsK0dBQW1HO0FBR25HLHNIQUFtSDtBQUVuSCxzRkFBcUY7QUFhckYsSUFBYSxxQkFBcUI7SUFjaEMsK0JBQXNCLEVBQWUsRUFDaEIsTUFBYyxFQUNkLEdBQTJCO1FBRjFCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBVGhELHFCQUFnQixHQUFXLEtBQUssQ0FBQztRQUNqQyxrQkFBYSxHQUFjLEtBQUssQ0FBQztRQUNqQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQVN6QixJQUFJLGNBQWMsR0FBa0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQ3hELENBQUM7SUFHRCx3Q0FBUSxHQUFSO1FBQUEsaUJBOERHO1FBNURFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ25GLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDN0UsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsRUFBRSxDQUFBLENBQUUs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QUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUEsQ0FBQztZQUMzQixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsQ0FBQztJQUNOLENBQUM7SUFDTCw0QkFBQztBQUFELENBaEpBLEFBZ0pDLElBQUE7QUFoSlkscUJBQXFCO0lBUmpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO0tBQzlDLENBQUM7cUNBaUIwQixtQkFBVztRQUNSLGVBQU07UUFDVixtREFBdUI7R0FoQnJDLHFCQUFxQixDQWdKakM7QUFoSlksc0RBQXFCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1Z21lbnRlZFZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci92YWxpZGF0b3JzL2F1Z21lbnRlZC52YWxpZGF0b3InO1xuaW1wb3J0IHsgZW1haWxNYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvdmFsaWRhdG9ycy9zZXJ2aWNlcy9lbWFpbC52YWxpZGF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Nb2RlbCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscy9yZWdpc3RyYXRpb24ubW9kZWwnO1xuXG5pbXBvcnQgeyBCcm9rZXJEaXNwYXRjaGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvc2VydmljZXMvYnJva2VyLmRpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBCcm9rZXJSZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5yZXNwb25zZS5tb2RlbCc7XG5pbXBvcnQgeyBCcm9rZXJMaXN0IH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvYnJva2VyYWdlL25ncngtc3R1YnMvYnJva2VybGlzdCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbi8qKlxuICogVGhpcyByZXByZXNlbnRzIGEgR2l0aHViIHVzZXIncyBkZXRhaWxzIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXJlZ2lzdHJhdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbmV3VXNlcjogRm9ybUdyb3VwO1xuICBzdG9yZVN0YXRlU3ViIDphbnk7XG4gIGxheW91dFJlcXVlc3RlZFVybFN1YjpTdWJzY3JpcHRpb247XG4gIGhhc0xvZ2dlZEluVXNlclN1YjpTdWJzY3JpcHRpb247XG4gIHByb2ZpbGVTdGF0ZVN1YjpTdWJzY3JpcHRpb247XG4gIHVzZXJsb2dnZWRJbjpib29sZWFuO1xuICB1c2VybmFtZUNvbXBsZXRlOmJvb2xlYW4gPSBmYWxzZTtcbiAgdmFsaWRVc2VyTmFtZTpib29sZWFuICAgID0gZmFsc2U7XG4gIHVzZXJOYW1lQXR0ZW1wdDpib29sZWFuICA9IGZhbHNlO1xuICBicm9rZXJSZWY6YW55O1xuICBwcml2YXRlIHJlcXVlc3RlZFVybDpzdHJpbmc7XG5cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSAgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgIHByaXZhdGUgYkRTOkJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlKSB7XG5cbiAgICAgICAgICB2YXIgYnJva2VyUmVzcG9uc2U6QnJva2VyUmVzcG9uc2UgPSB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlclNlbGVjdG9yKEJyb2tlckxpc3QuQlJPS0VSX1JFR0lTVFJBVElPTl9TVE9SRSk7XG4gICAgICAgICAgdGhpcy5icm9rZXJSZWYgPSBicm9rZXJSZXNwb25zZS5icm9rZXJSZXF1ZXN0ZWQ7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgICAgdGhpcy5sYXlvdXRSZXF1ZXN0ZWRVcmxTdWIgPSB0aGlzLmJyb2tlclJlZi5zdG9yZU9icy5sYXlvdXRSZXF1ZXN0ZWRVcmwkLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RlZFVybCA9IHZhbHVlO1xuICAgICAgIH0pO1xuXG4gICAgICAgdGhpcy5oYXNMb2dnZWRJblVzZXJTdWIgPSB0aGlzLmJyb2tlclJlZi5zdG9yZU9icy5oYXNMb2dnZWRJblVzZXIkLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJsb2dnZWRJbiA9IHZhbHVlO1xuICAgICAgICAgICAgaWYoIHRoaXMudXNlcmxvZ2dlZEluICkge1xuICAgICAgICAgICAgICBpZiggdGhpcy5yZXF1ZXN0ZWRVcmwgKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCB0aGlzLnJlcXVlc3RlZFVybCApO1xuICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICBsZXQgbmV3dXNlck5hbWUgPSB0aGlzLm5ld1VzZXIuZ2V0KCduYW1lJykuZ2V0KCd1c2VybmFtZScpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwcm9maWxlL3VzZXJuYW1lLycsIG5ld3VzZXJOYW1lXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgfSk7XG5cbiAgICAgICB0aGlzLnByb2ZpbGVTdGF0ZVN1YiA9IHRoaXMuYnJva2VyUmVmLnN0b3JlT2JzLnByb2ZpbGVTdGF0ZSQuc3Vic2NyaWJlKHN0YXRlID0+IHtcbiAgICAgICAgICAgICAgaWYoc3RhdGUudmFsaWRVc2VyTmFtZSA9PT0gJ3ZhbGlkJykge1xuICAgICAgICAgICAgICAgICAgdGhpcy51c2VybmFtZUNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRVc2VyTmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1lbHNlIGlmKCBzdGF0ZS52YWxpZFVzZXJOYW1lID09PSAnaW5WYWxpZCcpIHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJOYW1lQXR0ZW1wdCAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkVXNlck5hbWUgICAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgIH0pO1xuXG5cbiAgICAgICAgdGhpcy5uZXdVc2VyID0gdGhpcy5mYi5ncm91cCgge1xuICAgICAgICAgIG5hbWU6ICB0aGlzLmZiLmdyb3VwKCB7XG4gICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IFsgJycsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgxNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVnbWVudGVkVmFsaWRhdG9ycy5pc0FscGhhbnVtZXJpYygpXV0sXG4gICAgICAgICAgICAgICAgICAgICAgfSApLFxuICAgICAgICAgIHVzZXI6ICB0aGlzLmZiLmdyb3VwKCB7XG5cbiAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogWycnLCAgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDE1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWdtZW50ZWRWYWxpZGF0b3JzLnBhc3N3b3JkUGF0dGVybigpXV0sXG5cbiAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IFsnJywgICBbIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Z21lbnRlZFZhbGlkYXRvcnMuaXNBbHBoYSgpXV0sXG5cbiAgICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTogIFsnJywgIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgxNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVnbWVudGVkVmFsaWRhdG9ycy5pc0FscGhhKCldXVxuICAgICAgICAgICAgICAgICAgICB9ICksXG4gICAgICAgICAgYWNjb3VudDogdGhpcy5mYi5ncm91cCgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFsnJywgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWdtZW50ZWRWYWxpZGF0b3JzLmlzRW1haWwoKV1dLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtOiBbJycsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVnbWVudGVkVmFsaWRhdG9ycy5pc0VtYWlsKCldXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7IHZhbGlkYXRvcjogZW1haWxNYXRjaGVyIH0gKVxuXG4gICAgICAgIH0gKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgcmVzZXRWYWxpZFVzZXJOYW1lKCl7XG4gICAgICAgIHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyQWN0aW9uKHRoaXMuYnJva2VyUmVmLnN0b3JlRHNwLlJFU0VUX1VTRVJfUFJPRklMRV9OQU1FX1ZBTElEKTtcblxuICAgIH1cblxuICAgIG9uVXNlck5hbWVPdXRGb2N1c2VkKCkge1xuICAgICAgICBpZih0aGlzLm5ld1VzZXIuZ2V0KCduYW1lJykuZ2V0KCd1c2VybmFtZScpLnZhbGlkKSB7XG4gICAgICAgICAgICB2YXIgbm90ZSA9IHRoaXMuYnJva2VyUmVmLnN0b3JlRHNwLkNIRUNLX1VTRVJfUFJPRklMRV9OQU1FX0FUVEVNUFQ7XG4gICAgICAgICAgICBub3RlLnBheUxvYWQgPSB0aGlzLm5ld1VzZXIuZ2V0KCduYW1lJykuZ2V0KCd1c2VybmFtZScpLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5iRFMuZGlzcGF0Y2hCcm9rZXJBY3Rpb24obm90ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uVXNlck5hbWVLZXllZFVwKCkge1xuICAgICAgaWYodGhpcy51c2VybmFtZUNvbXBsZXRlIHx8IHRoaXMudXNlck5hbWVBdHRlbXB0KSB7XG4gICAgICAgIGlmKHRoaXMudXNlcm5hbWVDb21wbGV0ZSkge1xuICAgICAgICAgICB0aGlzLnVzZXJOYW1lQXR0ZW1wdCAgPSBmYWxzZTtcbiAgICAgICAgICAgdGhpcy52YWxpZFVzZXJOYW1lICAgID0gZmFsc2U7XG4gICAgICAgICAgIHRoaXMudXNlcm5hbWVDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnVzZXJOYW1lQXR0ZW1wdCkge1xuICAgICAgICAgICB0aGlzLnVzZXJOYW1lQXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRWYWxpZFVzZXJOYW1lKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgICBpZih0aGlzLm5ld1VzZXIudmFsaWQpIHtcbiAgICAgICAgICAgICBjb25zdCB1c2VyT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5uZXdVc2VyLnZhbHVlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3VXNlci52YWx1ZS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1haWw6dGhpcy5uZXdVc2VyLnZhbHVlLmFjY291bnQuZW1haWx9KTtcblxuICAgICAgICAgICAgIHZhciBub3RlICA9IHRoaXMuYnJva2VyUmVmLnN0b3JlRHNwLlJFR0lTVEVSX1VTRVJfQVRURU1QVDtcbiAgICAgICAgICAgICBub3RlLnBheUxvYWQgPSA8UmVnaXN0cmF0aW9uTW9kZWw+KHVzZXJPYmopO1xuICAgICAgICAgICAgIHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyQWN0aW9uKG5vdGUpO1xuICAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAgaWYodGhpcy52YWxpZFVzZXJOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VmFsaWRVc2VyTmFtZSgpO1xuICAgICAgICAgfVxuICAgICAgICAgaWYodGhpcy5zdG9yZVN0YXRlU3ViKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlU3RhdGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGlmKHRoaXMucHJvZmlsZVN0YXRlU3ViKXtcbiAgICAgICAgICAgICB0aGlzLnByb2ZpbGVTdGF0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgfVxuICAgICAgICAgaWYodGhpcy5oYXNMb2dnZWRJblVzZXJTdWIpe1xuICAgICAgICAgICAgIHRoaXMuaGFzTG9nZ2VkSW5Vc2VyU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICB9XG4gICAgICAgICBpZih0aGlzLmxheW91dFJlcXVlc3RlZFVybFN1Yil7XG4gICAgICAgICAgICAgdGhpcy5sYXlvdXRSZXF1ZXN0ZWRVcmxTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgIH1cbiAgICB9XG59XG4iXX0=
