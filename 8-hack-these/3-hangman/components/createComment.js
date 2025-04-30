import { state } from '../data.js';
import { dom } from '../dom.js';

export const createComment = () => {
    dom.showLives.innerText = `You have ${state.lives} lives`;
    if (state.lives < 1) {
        dom.showLives.innerText = 'Game Over';
    }

    if (
        state.guesses.length !== 0 &&
        state.counter + state.space === state.guesses.length
    ) {
        dom.showLives.innerText = 'You Win!';
    }
};
