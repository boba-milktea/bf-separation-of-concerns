/*
  can you add a utils function to determine if a player has won the game?
*/

export const determineWinner = (board = []) => {
    const result = [];
    for (let i = 0; i < 9; i++) {
        const element = document.getElementById(String(i)).textContent.trim();
        result.push(element);
    }

    const winMetric = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ];

    for (const [x, y, z] of winMetric) {
        if (result[x] && result[x] === result[y] && result[x] === result[z]) {
            return result[x];
        }
    }
    if (result.every((cell) => cell !== '')) {
        return 'tie';
    }
    return null;
};
