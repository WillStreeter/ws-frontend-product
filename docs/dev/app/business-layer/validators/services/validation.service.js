"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'isAlphanumeric': 'Only Alpha and Numerical characters.',
            'isAlpha': 'Only Alpha characters.',
            'isEmail': 'Invalid email address',
            'userNameAvailable': 'This username has been taken',
            'emailMatcher': 'The email address you have entered do not match',
            'invalidPassword': 'Only AlphaNumeric and the "$" sign.',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'maxlength': "Maximum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.passwordValidator = function () {
        return function (options) {
            return function (c) {
                if (c.value === null) {
                    return null;
                }
                var regexStr = '^[A-Za-z0-9$]+$';
                var regex = new RegExp(regexStr);
                if (regex.test(c.value)) {
                    return null;
                }
                else {
                    return { 'invalidPassword': true };
                }
            };
        };
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci92YWxpZGF0b3JzL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBQUE7SUFvQ0EsQ0FBQztJQW5DVSwwQ0FBd0IsR0FBL0IsVUFBZ0MsYUFBcUIsRUFBRSxjQUFvQjtRQUV2RSxJQUFJLE1BQU0sR0FBTztZQUNiLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLGdCQUFnQixFQUFDLHNDQUFzQztZQUN2RCxTQUFTLEVBQUMsd0JBQXdCO1lBQ2xDLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsbUJBQW1CLEVBQUMsOEJBQThCO1lBQ2xELGNBQWMsRUFBRSxpREFBaUQ7WUFDakUsaUJBQWlCLEVBQUUscUNBQXFDO1lBQ3hELFdBQVcsRUFBRSxvQkFBa0IsY0FBYyxDQUFDLGNBQWdCO1lBQzlELFdBQVcsRUFBRSxvQkFBa0IsY0FBYyxDQUFDLGNBQWdCO1NBQ2pFLENBQUM7UUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxtQ0FBaUIsR0FBeEI7UUFHTSxNQUFNLENBQUMsVUFBQyxPQUFhO1lBQ3BCLE1BQU0sQ0FBQyxVQUFDLENBQWtCO2dCQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsSUFBSSxRQUFRLEdBQVcsaUJBQWlCLENBQUM7Z0JBQ3pDLElBQUksS0FBSyxHQUFXLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQUEsSUFBSSxDQUFDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZDLENBQUM7WUFDTCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7SUFDUixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLDhDQUFpQiIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvdmFsaWRhdG9ycy9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcbiAgICBzdGF0aWMgZ2V0VmFsaWRhdG9yRXJyb3JNZXNzYWdlKHZhbGlkYXRvck5hbWU6IHN0cmluZywgdmFsaWRhdG9yVmFsdWU/OiBhbnkpOmFueSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIltWYWxpZGF0aW9uU2VydmljZV09PT0gZ2V0VmFsaWRhdG9yRXJyb3JNZXNzYWdlIC0tLXZhbGlkYXRvck5hbWUgXCIsIHZhbGlkYXRvck5hbWUpXG4gICAgICAgIGxldCBjb25maWc6YW55ID0ge1xuICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ1JlcXVpcmVkJyxcbiAgICAgICAgICAgICdpc0FscGhhbnVtZXJpYyc6J09ubHkgQWxwaGEgYW5kIE51bWVyaWNhbCBjaGFyYWN0ZXJzLicsXG4gICAgICAgICAgICAnaXNBbHBoYSc6J09ubHkgQWxwaGEgY2hhcmFjdGVycy4nLFxuICAgICAgICAgICAgJ2lzRW1haWwnOiAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyxcbiAgICAgICAgICAgICd1c2VyTmFtZUF2YWlsYWJsZSc6J1RoaXMgdXNlcm5hbWUgaGFzIGJlZW4gdGFrZW4nLFxuICAgICAgICAgICAgJ2VtYWlsTWF0Y2hlcic6ICdUaGUgZW1haWwgYWRkcmVzcyB5b3UgaGF2ZSBlbnRlcmVkIGRvIG5vdCBtYXRjaCcsXG4gICAgICAgICAgICAnaW52YWxpZFBhc3N3b3JkJzogJ09ubHkgQWxwaGFOdW1lcmljIGFuZCB0aGUgXCIkXCIgc2lnbi4nLFxuICAgICAgICAgICAgJ21pbmxlbmd0aCc6IGBNaW5pbXVtIGxlbmd0aCAke3ZhbGlkYXRvclZhbHVlLnJlcXVpcmVkTGVuZ3RofWAsXG4gICAgICAgICAgICAnbWF4bGVuZ3RoJzogYE1heGltdW0gbGVuZ3RoICR7dmFsaWRhdG9yVmFsdWUucmVxdWlyZWRMZW5ndGh9YFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBjb25maWdbdmFsaWRhdG9yTmFtZV07XG4gICAgfVxuXG4gICAgc3RhdGljIHBhc3N3b3JkVmFsaWRhdG9yKCkge1xuICAgICAgICAvLyB7NiwxMDB9ICAgICAgICAgICAtIEFzc2VydCBwYXNzd29yZCBpcyBiZXR3ZWVuIDYgYW5kIDEwMCBjaGFyYWN0ZXJzXG4gICAgICAgIC8vICg/PS4qWzAtOV0pICAgICAgIC0gQXNzZXJ0IGEgc3RyaW5nIGhhcyBhdCBsZWFzdCBvbmUgbnVtYmVyXG4gICAgICAgICAgcmV0dXJuIChvcHRpb25zPzogYW55KSA9PiB7XG4gICAgICAgICAgIHJldHVybiAoYzogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGMudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCByZWdleFN0cjogc3RyaW5nID0gJ15bQS1aYS16MC05JF0rJCc7XG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ2V4U3RyKTtcbiAgICAgICAgICAgICAgICBpZiAocmVnZXgudGVzdChjLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICdpbnZhbGlkUGFzc3dvcmQnOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==
