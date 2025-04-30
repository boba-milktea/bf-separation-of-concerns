import { handleClick } from '../handlers/handleClick.js';

export const clickEvent = (buttons) => {
    buttons.forEach((btn) => {
        btn.addEventListener('click', handleClick);
    });
};
