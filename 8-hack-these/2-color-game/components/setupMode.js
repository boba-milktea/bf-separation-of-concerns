import { dom } from '../dom.js';
import { handleModeClick } from '../handlers/handleModeClick.js';

export const setupMode = () => {
    dom.modeButtons.forEach((button) => {
        button.addEventListener('click', () => handleModeClick(button));
    });
};
