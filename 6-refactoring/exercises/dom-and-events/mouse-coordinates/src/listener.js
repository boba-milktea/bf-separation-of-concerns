import { showMouseCoordinates } from './handler.js';

export const mouseEvent = (el) => {
    el.addEventListener('mousemove', showMouseCoordinates);
};
