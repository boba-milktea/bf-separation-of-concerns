import list from './util.js';
import { state } from '../data/state.js';

export const listHandler = () => {
    let acceptingInput = true;
    while (acceptingInput) {
        const nextInput = prompt(
            'enter a list item, cancel when your are done',
        );
        if (nextInput !== null) {
            state.allInputs.push(nextInput);
        } else {
            acceptingInput = false;
        }
    }
    const inputList = list(state.allInputs);
    const message = `all items:${inputList}`;
    alert(message);
};
