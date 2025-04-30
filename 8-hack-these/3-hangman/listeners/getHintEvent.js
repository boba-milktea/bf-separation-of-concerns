import { handleGetHint } from '../handlers/handleGetHint.js';

export const getHintEvent = (element) => {
    element.addEventListener('click', handleGetHint);
};
