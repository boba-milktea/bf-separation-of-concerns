import { createCells } from '../components/createCells.js';
import { dom } from '../dom.js';
import { startGame } from '../components/startGame.js';

export const handleLoad = () => {
    for (let i = 0; i < 9; i++) {
        const cellElement = createCells(i);
        dom.board.appendChild(cellElement);
    }
    startGame();
};
