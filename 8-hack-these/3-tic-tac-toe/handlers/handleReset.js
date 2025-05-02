import { startGame } from '../components/startGame.js';
import { state } from '../data.js';
import { dom } from '../dom.js';

export const handleReset = () => {
    state.inputs = [null, null, null, null, null, null, null, null, null];
    state.circleTurn = false;
    startGame(
        dom.board,
        state.classX,
        state.classCircle,
        state.circleTurn,
        dom.winningMessageElement,
    );
};
