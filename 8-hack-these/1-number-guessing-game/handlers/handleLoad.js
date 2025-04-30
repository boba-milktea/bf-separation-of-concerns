import { state } from '../data.js';
import { ranNumber } from '../util/ranNumber.js';
import { createMessage } from '../components/createMessage.js';

export const handleLoad = () => {
    state.guesses = 0;
    state.num = ranNumber(state.min, state.max);
    const tempMessage = `Guess a number from ${state.min} to ${state.max}`;
    createMessage(tempMessage, 'blue');
};
