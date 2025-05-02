import { handleModeClick } from '../handlers/handleModeClick.js';

export const setupMode = (modeButtons) => {
    modeButtons.forEach((button) => {
        button.addEventListener('click', () => handleModeClick(button));
    });
};
