import { handleGetLength } from '../handlers/handleGetLength.js';

export const getLength = (element) => {
    element.addEventListener('click', handleGetLength);
};
