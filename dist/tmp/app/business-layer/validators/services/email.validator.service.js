export const emailMatcher = (control) => {
    const email = control.get('email');
    const confirm = control.get('confirm');
    if (!email || !confirm) {
        return null;
    }
    if (email.value === confirm.value) {
        return null;
    }
    else {
        return { nomatch: true };
    }
};
