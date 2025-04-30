import { state } from '../data.js';
import { dom } from '../dom.js';
import { handleClick } from '../handlers/handleClick.js';
import { setBoardHoverClass } from './setBoardHoverClass.js';

export const startGame = () => {
    for (const child of dom.board.children) {
        child.classList.remove(state.classX);
        child.classList.remove(state.classCircle);
        child.removeEventListener('click', handleClick);
        child.addEventListener('click', handleClick, { once: true });
    }

    setBoardHoverClass();
    dom.winningMessageElement.classList.remove('show');
};
