import { handleLoad } from '../handlers/handleLoad.js';

export const loadEvent = () => {
    window.addEventListener('load', handleLoad);
};
