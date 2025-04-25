import { listHandler } from './handler.js';

export const event = (el) => {
    el.addEventListener('click', listHandler);
};
