import { searchFoodsHandler } from './handler.js';

export const event = (el) => {
    el.addEventListener('click', searchFoodsHandler);
};
