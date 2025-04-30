import { createComment } from '../components/createComment.js';
import { createHangMan } from '../components/createHangMan.js';
import { state } from '../data.js';

export const handleKeyClick = (e) => {
    const guess = e.target.innerText;
    e.target.className = 'active';
    e.target.onClick = null;
    for (let i = 0; i < state.word.length; i++) {
        if (state.word[i] === guess) {
            state.guesses[i].innerText = guess;
            state.counter++;
        }
    }

    const wordIndex = state.word.indexOf(guess);
    if (wordIndex === -1) {
        state.lives--;
        createComment();
        createHangMan();
    } else {
        createComment();
    }
};
