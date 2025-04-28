import { board } from '../components/board.js';

export const loadHandler = () => {
    const newBoard = board(4, 4);

    document.getElementById('board-container').append(newBoard);
};
