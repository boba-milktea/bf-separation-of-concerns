import { castTheValue } from './handler.js';

export const event = (el) => {
    el.addEventListener('click', castTheValue);
};
