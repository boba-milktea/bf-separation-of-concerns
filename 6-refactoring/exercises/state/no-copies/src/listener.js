import { saveNoCopiesHandler } from './handler.js';

export const event = (el) => {
    el.addEventListener('click', saveNoCopiesHandler);
};
