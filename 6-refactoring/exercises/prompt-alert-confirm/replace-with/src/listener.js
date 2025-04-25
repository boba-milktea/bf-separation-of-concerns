import { replaceWithHandler } from './handler.js';

export const event = (el) => {
    el.addEventListener('click', replaceWithHandler);
};
