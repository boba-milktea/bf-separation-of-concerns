import { createButtons } from '../components/createButtons.js';
import { dom } from '../dom.js';
import { state } from '../data.js';
import { random } from '../util/random.js';
import { createUnderlines } from '../components/createUnderlines.js';
import { categoryMessage } from '../components/categoryMessage.js';
import { canvas } from '../util/drawHangMan.js';
import { createComment } from '../components/createComment.js';

export const handleLoad = () => {
    // alphabet buttons
    const letters = document.createElement('ul');
    letters.id = 'alphabet';

    //create keyboards
    state.alphabet.forEach((al) => {
        const alEl = createButtons(al);
        letters.appendChild(alEl);
    });
    dom.buttons.appendChild(letters);

    // initiate the game
    state.chosenCategory = random(state.categories);
    state.word = random(state.chosenCategory);
    state.word = state.word.replace(/\s/g, '-');
    categoryMessage(state.categories, state.chosenCategory, dom.catagoryName);
    canvas(dom.stickMan);
    createButtons();
    createComment(
        dom.showLives,
        state.lives,
        state.guesses,
        state.counter,
        state.space,
    );

    // create guessing word underlines
    const correct = document.createElement('ul');
    correct.id = 'my-word';

    [...state.word].forEach((letter) => {
        const guessLetterEl = createUnderlines(
            letter,
            state.space,
            state.guesses,
        );
        correct.appendChild(guessLetterEl);
    });

    dom.wordHolder.appendChild(correct);
};
