import { state } from '../data.js';

export const createUnderlines = (letter) => {
    const guessLetter = document.createElement('li');
    guessLetter.className = 'guess';
    if (letter === '-') {
        guessLetter.innerHTML = '-';
        state.space = 1;
    } else {
        guessLetter.innerHTML = '_';
    }

    state.guesses.push(guessLetter);
    return guessLetter;
};
