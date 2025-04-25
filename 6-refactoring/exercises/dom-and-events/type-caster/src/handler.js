import typeCaster from './util.js';

export const castTheValue = (e) => {
    const form = e.target.form;
    const intendedType = form.type.value;
    const stringToCast = form.value.value;
    const result = typeCaster(intendedType, stringToCast);
    document.getElementById('casted-value').innerHTML =
        typeof result + ': ' + result;
};
