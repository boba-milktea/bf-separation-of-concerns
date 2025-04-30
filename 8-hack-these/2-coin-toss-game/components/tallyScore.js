import { state } from '../data.js';
import { dom } from '../dom.js';

export const tallyScore = (random, userPick, computerPick) => {
    if (userPick === random) {
        state.userScore++;
    }
    if (computerPick === random) {
        state.computerScore++;
    }

    dom.playerDisplay.textContent = `${state.userScore}`;
    dom.computerDisplay.textContent = `${state.computerScore}`;

    if (state.userScore === 5 && state.computerScore === 5) {
        dom.winner.innerHTML = `<h1>It's a Tie</h1>`;
    } else if (state.userScore === 5) {
        dom.winner.innerHTML = `<h1>You Win!!!</h1>`;
    } else if (state.computerScore === 5) {
        dom.winner.innerHTML = `<h1>Computer Wins!!!</h1>`;
    }
};
