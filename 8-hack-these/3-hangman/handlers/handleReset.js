import { state } from '../data.js';
import { dom } from '../dom.js';
import { handleLoad } from './handleLoad.js';

export const handleReset = () => {
    dom.showClue.innerText = '';
    const correct = document.getElementById('my-word');
    correct.remove();
    const alphabet = document.getElementById('alphabet');
    alphabet.remove();
    const context = dom.stickMan.getContext('2d');
    context.clearRect(0, 0, 400, 400);
    state.guesses = [];
    state.lives = 10;
    state.counter = 0;
    state.space = 0;
    handleLoad();
};
