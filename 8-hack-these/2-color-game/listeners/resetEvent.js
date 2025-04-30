import { dom } from '../dom.js';
import { handleReset } from '../handlers/handleReset.js';

export const resetEvent = () => {
    dom.resetButton.addEventListener('click', handleReset);
};
