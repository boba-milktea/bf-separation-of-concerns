import { dom } from '../dom.js';
import { state } from '../data.js';

export const gameOver = () => {
    dom.btn.innerText = 'Restart Game';
    dom.guessInput.style.display = 'none';
    dom.btn.classList.add('replay');
    state.max += 5;
};
