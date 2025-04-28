import { board } from '../components/board.js';

export const resetHandler = () => {
    document.getElementById('board-container').innerHTML = '';
    const newBoard = board(4, 4);
    document.getElementById('board-container').append(newBoard);
};
