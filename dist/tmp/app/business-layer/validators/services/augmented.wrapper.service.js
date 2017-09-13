import * as validator from 'validator';
const getValidator = (name, value, options) => {
    if (options) {
        return validator[name](value, options) ? null : {
            [name]: {
                valid: false
            }
        };
    }
    return validator[name](value) ? null : {
        [name]: {
            valid: false
        }
    };
};
export function getParamValidator(name) {
    return (options) => {
        return (c) => {
            return getValidator(name, c.value, options);
        };
    };
}
