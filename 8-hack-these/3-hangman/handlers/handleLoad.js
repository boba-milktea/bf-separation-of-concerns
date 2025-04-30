import { createButtons } from '../components/createButtons.js';
import { dom } from '../dom.js';
import { state } from '../data.js';
import { random } from '../util/random.js';
import { play } from '../util/play.js';
import { createUnderlines } from '../components/createUnderlines.js';

export const handleLoad = () => {
    // alphabet buttons
    const letters = document.createElement('ul');
    letters.id = 'alphabet';

    state.alphabet.forEach((al) => {
        const alEl = createButtons(al);
        letters.appendChild(alEl);
    });
    dom.buttons.appendChild(letters);

    play();

    // word underlines
    const correct = document.createElement('ul');
    correct.id = 'my-word';

    [...state.word].forEach((letter) => {
        const guessLetterEl = createUnderlines(letter);
        correct.appendChild(guessLetterEl);
    });

    dom.wordHolder.appendChild(correct);
};
