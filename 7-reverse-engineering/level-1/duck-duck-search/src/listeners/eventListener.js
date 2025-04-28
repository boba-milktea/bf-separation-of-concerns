import { clickHandler } from '../handlers/clickHandler.js';

export const eventListener = (element) => {
    element.addEventListener('click', clickHandler);
};
