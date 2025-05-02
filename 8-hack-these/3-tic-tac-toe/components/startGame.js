import { handleClick } from '../handlers/handleClick.js';
import { setBoardHoverClass } from './setBoardHoverClass.js';

export const startGame = (
    board,
    classX,
    classCircle,
    circleTurn,
    winningMessageElement,
) => {
    for (const child of board.children) {
        child.classList.remove(classX);
        child.classList.remove(classCircle);
        child.removeEventListener('click', handleClick);
        child.addEventListener('click', handleClick, { once: true });
    }

    setBoardHoverClass(board.classList, classX, classCircle, circleTurn);
    winningMessageElement.classList.remove('show');
};
