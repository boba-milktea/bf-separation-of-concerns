import { state } from '../data.js';
import { dom } from '../dom.js';

export const setBoardHoverClass = () => {
    dom.board.classList.remove(state.classX);
    dom.board.classList.remove(state.classCircle);
    dom.board.classList.add(
        state.circleTurn ? state.classCircle : state.classX,
    );
};
