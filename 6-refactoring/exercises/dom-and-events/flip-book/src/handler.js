import { reverseAndUpper } from './util.js';

export const reverseAndUpperHandler = (e) => {
    const input = e.target.value;
    const result = reverseAndUpper(input);
    document.getElementById('output').innerHTML = result;
};
