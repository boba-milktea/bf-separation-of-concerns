import { handleKeyClick } from '../handlers/handleKeyClick.js';

export const keyClickEvent = (element) => {
    element.addEventListener('click', handleKeyClick);
};
