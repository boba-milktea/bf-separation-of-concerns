import formatCoordinates from './util.js';

export const showMouseCoordinates = (e) => {
    const result = formatCoordinates(e.pageX, e.pageY);
    document.getElementById('mouse-position').innerHTML = result;
};
