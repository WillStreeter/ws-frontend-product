export class ValidationService {
    static getValidatorErrorMessage(validatorName, validatorValue) {
        let config = {
            'required': 'Required',
            'isAlphanumeric': 'Only Alpha and Numerical characters.',
            'isAlpha': 'Only Alpha characters.',
            'isEmail': 'Invalid email address',
            'userNameAvailable': 'This username has been taken',
            'emailMatcher': 'The email address you have entered do not match',
            'invalidPassword': 'Only AlphaNumeric and the "$" sign.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'maxlength': `Maximum length ${validatorValue.requiredLength}`
        };
        return config[validatorName];
    }
    static passwordValidator() {
        return (options) => {
            return (c) => {
                if (c.value === null) {
                    return null;
                }
                let regexStr = '^[A-Za-z0-9$]+$';
                let regex = new RegExp(regexStr);
                if (regex.test(c.value)) {
                    return null;
                }
                else {
                    return { 'invalidPassword': true };
                }
            };
        };
    }
}
