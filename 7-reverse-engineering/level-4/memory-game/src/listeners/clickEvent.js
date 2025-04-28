import { clickHandler } from '../handlers/clickHandler.js';

export const clickEvent = (element) => {
    element.addEventListener('click', clickHandler);
};
