import { averageEvensHandler } from './handler.js';

export const event = (el) => {
    el.addEventListener('click', averageEvensHandler);
};
