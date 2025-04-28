import { handleChange } from '../handlers/handleChange.js';

export const event = (element) => {
    element.addEventListener('change', handleChange);
};
