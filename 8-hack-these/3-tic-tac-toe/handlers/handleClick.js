import { state } from '../data.js';
import { dom } from '../dom.js';
import { placeMark } from '../components/placeMark.js';
import { checkWin } from '../util/checkWin.js';
import { isDraw } from '../util/isDraw.js';
import { setBoardHoverClass } from '../components/setBoardHoverClass.js';
import { endGame } from '../components/endGame.js';

export const handleClick = (e) => {
    const cell = e.target;
    console.log(state.circleTurn);
    const currentClass = state.circleTurn ? state.classCircle : state.classX;
    placeMark(cell, currentClass, state.inputs);
    if (checkWin(state.winCombination, state.inputs)) {
        endGame(
            false,
            dom.winningMessageTextElement,
            dom.winningMessageElement,
            state.circleTurn,
        );
    } else if (isDraw(state.inputs)) {
        endGame(
            false,
            dom.winningMessageTextElement,
            dom.winningMessageElement,
            state.circleTurn,
        );
    } else {
        state.circleTurn = !state.circleTurn;
        setBoardHoverClass(
            dom.board.classList,
            state.classX,
            state.classCircle,
            state.circleTurn,
        );
    }
};
