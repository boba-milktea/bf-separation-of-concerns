import { createComment } from '../components/createComment.js';
import { createHangMan } from '../components/createHangMan.js';
import { state } from '../data.js';
import { dom } from '../dom.js';

export const handleKeyClick = (e) => {
    if (state.lives === 0) {
        for (const child of dom.buttons.children[0].children) {
            child.classList.add('disabled');
        }
    }

    const guess = e.target.textContent;
    e.target.className = 'active';
    e.target.onClick = null;
    console.log(state.word);
    console.log(state.guesses);
    for (let i = 0; i < state.word.length; i++) {
        if (state.word[i] === guess) {
            state.guesses[i].textContent = guess;
            state.counter++;
        }
    }

    const wordIndex = state.word.indexOf(guess);
    if (wordIndex === -1) {
        state.lives--;
        createComment(
            dom.showLives,
            state.lives,
            state.guesses,
            state.counter,
            state.space,
        );
        createHangMan(state.lives, state.drawArray, dom.stickMan);
    } else {
        createComment(
            dom.showLives,
            state.lives,
            state.guesses,
            state.counter,
            state.space,
        );
    }
};
