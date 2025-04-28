import { state } from '../data.js';

export const decideWinner = () => {
    const currentBoard = state.board;
    const winningPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];

    for (const [x, y, z] of winningPattern) {
        if (
            currentBoard[x] &&
            currentBoard[x] === currentBoard[y] &&
            currentBoard[x] === currentBoard[z]
        ) {
            return `winner - ${currentBoard[x]}`;
        }
    }

    if (currentBoard.every((cell) => cell !== null)) {
        return "it's tie";
    }
};
