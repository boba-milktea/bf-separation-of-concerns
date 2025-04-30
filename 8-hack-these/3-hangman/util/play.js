import { state } from '../data.js';
import { categoryMessage } from '../components/categoryMessage.js';
import { random } from './random.js';
import { canvas } from './drawHangMan.js';
import { createComment } from '../components/createComment.js';
import { createUnderlines } from '../components/createUnderlines.js';
import { createButtons } from '../components/createButtons.js';

export const play = () => {
    // random category and word
    state.chosenCategory = random(state.categories);
    state.word = random(state.chosenCategory);
    state.word = state.word.replace(/\s/g, '-');
    categoryMessage();
    canvas();
    createButtons();
    createComment();
    categoryMessage();
    createUnderlines();
    state.guesses = [];
    state.lives = 10;
    state.counter = 0;
    state.space = 0;
};
