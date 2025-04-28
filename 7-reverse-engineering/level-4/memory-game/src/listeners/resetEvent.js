import { resetHandler } from '../handlers/resetHandler.js';

export const resetEvent = (element) => {
    element.addEventListener('click', resetHandler);
};
