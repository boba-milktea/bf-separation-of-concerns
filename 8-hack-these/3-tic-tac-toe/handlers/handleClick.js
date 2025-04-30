import { state } from '../data.js';
import { placeMark } from '../components/placeMark.js';
import { checkWin } from '../util/checkWin.js';
import { isDraw } from '../util/isDraw.js';
import { setBoardHoverClass } from '../components/setBoardHoverClass.js';
import { endGame } from '../components/endGame.js';

export const handleClick = (e) => {
    const cell = e.target;
    console.log(state.circleTurn);
    const currentClass = state.circleTurn ? state.classCircle : state.classX;
    placeMark(cell, currentClass);
    if (checkWin()) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        state.circleTurn = !state.circleTurn;
        setBoardHoverClass();
    }
};
