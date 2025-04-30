import { dom } from '../dom.js';
import { handleReset } from '../handlers/handleReset.js';

export const resetEvent = () => {
    dom.restartButton.addEventListener('click', handleReset);
};
