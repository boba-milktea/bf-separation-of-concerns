import { dom } from '../dom/dom.js';

export const setLeftMargin = () => {
    let maxWidth = dom.gameArea.clientWidth;
    if (maxWidth <= 100) {
        maxWidth = maxWidth + 200;
    } else {
        maxWidth = maxWidth - 200;
    }

    return maxWidth;
};
