import { mouseOverHandler } from '../handlers/hoverHandler.js';
import { mouseOutHandler } from '../handlers/hoverHandler.js';

export const mouseOverEvent = (element) => {
    element.addEventListener('mouseover', mouseOverHandler);
};

export const mouseOutEvent = (element) => {
    element.addEventListener('mouseout', mouseOutHandler);
};
