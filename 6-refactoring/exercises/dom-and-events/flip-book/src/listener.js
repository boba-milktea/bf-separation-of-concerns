import { reverseAndUpperHandler } from './handler.js';

export const event = (element) => {
    element.addEventListener('keyup', reverseAndUpperHandler);
};
