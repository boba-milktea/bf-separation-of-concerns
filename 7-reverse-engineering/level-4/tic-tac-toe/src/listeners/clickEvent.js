import { handleClick } from '../handlers/handleClick.js';

export const clickEvent = (element) => {
    element.addEventListener('click', handleClick);
};
