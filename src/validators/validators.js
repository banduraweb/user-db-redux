export const required = (value)  => {
    if (!value || value === '') {
        return 'This field is required';
    }
    return undefined
};


export const requiredFirstName = value => {
    const regex =  /^[a-zA-Z]{1,20}$/g;
    if (!regex.test(value.trim())) {
        return 'Not correct';
    }
};


export const requiredLastName = value => {
    const regex =  /^[a-zA-Z]{1,20}$/g;
    if (!regex.test(value.trim())) {
        return 'Not correct';
    }
};


export const requiredAge = value => {
    if (+value < 16 || +value > 121) {
        return '16...120';
    }
};


export const requiredPhone = value => {
    const regex = /^\+380\d{9}$/;

    if (!regex.test(value.trim())) {
        return 'format +380675011766';
    }
};