import { runningAverageHandler } from './handler.js';

export const event = (el) => {
    el.addEventListener('click', runningAverageHandler);
};
