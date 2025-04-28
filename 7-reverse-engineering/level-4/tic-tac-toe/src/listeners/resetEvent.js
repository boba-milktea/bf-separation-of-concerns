import { handleReset } from '../handlers/handleReset.js';

export const resetEvent = (element) => {
    element.addEventListener('click', handleReset);
};
