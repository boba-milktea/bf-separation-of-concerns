import { createCells } from '../components/createCells.js';
import { dom } from '../dom.js';
import { state } from '../data.js';
import { startGame } from '../components/startGame.js';

export const handleLoad = () => {
    for (let i = 0; i < 9; i++) {
        const cellElement = createCells(i);
        dom.board.appendChild(cellElement);
    }
    startGame(
        dom.board,
        state.classX,
        state.classCircle,
        state.circleTurn,
        dom.winningMessageElement,
    );
};
