import { dom } from '../dom.js';
import { state } from '../data.js';

export const endGame = (draw) => {
    console.log(draw);
    if (draw) {
        dom.winningMessageTextElement.innerText = 'Draw!';
    } else {
        dom.winningMessageTextElement.innerText = `${
            state.circleTurn ? "O's" : "X's"
        } Wins!`;
    }
    dom.winningMessageElement.classList.add('show');
};
