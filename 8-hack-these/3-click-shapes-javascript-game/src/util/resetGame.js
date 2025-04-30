import { state } from '../data.js';
import { dom } from '../dom/dom.js';

export const resetGame = () => {
    clearTimeout(state.playArea.timer);
    state.inPlay = false;
    dom.button.style.display = 'block';
};
