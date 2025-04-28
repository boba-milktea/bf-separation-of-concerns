import { changeHandler } from '../handlers/changeHandler.js';

export const event = (element) => {
    element.addEventListener('change', changeHandler);
};
