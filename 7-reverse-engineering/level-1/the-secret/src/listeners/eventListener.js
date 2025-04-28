import { overHandler } from '../handlers/overHandler.js';
import { outHandler } from '../handlers/outHandler.js';

export const eventListener = (element) => {
    element.addEventListener('mouseover', overHandler);
    element.addEventListener('mouseout', outHandler);
};
