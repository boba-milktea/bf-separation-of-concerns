import { dom } from '../dom/dom.js';

export const setTopMargin = () => {
    let maxHeight = dom.gameArea.clientHeight;
    if (maxHeight <= 100) {
        maxHeight = maxHeight + 200;
    } else {
        maxHeight = maxHeight - 200;
    }

    return maxHeight;
};
