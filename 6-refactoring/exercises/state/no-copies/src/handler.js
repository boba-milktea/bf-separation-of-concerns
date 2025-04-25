import saveNoCopies from './util.js';
import { state } from '../data/state.js';

export const saveNoCopiesHandler = () => {
    let userInput = null;
    while (userInput === null) {
        userInput = prompt('enter a string to save');
    }
    saveNoCopies(userInput);
    const message = state.noCopies.join(', ');
    alert(message);
};
