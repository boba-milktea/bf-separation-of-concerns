export const endGame = (
    draw,
    winningMessageTextElement,
    winningMessageElement,
    circleTurn,
) => {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${
            circleTurn ? "O's" : "X's"
        } Wins!`;
    }
    winningMessageElement.classList.add('show');
};
