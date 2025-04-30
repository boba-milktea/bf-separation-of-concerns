import { state } from '../data.js';

export const checkWin = () => {
    let haveAwinner = false;
    for (const [a, b, c] of state.winCombination) {
        if (
            state.inputs[a] &&
            state.inputs[a] === state.inputs[b] &&
            state.inputs[a] === state.inputs[c]
        ) {
            haveAwinner = true;
        }
    }
    return haveAwinner;
};
