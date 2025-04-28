import { state } from '../data.js';
import { isNumber } from '../logic/isNumber.js';

export const handleChangeColor = (e) => {
    if (e.target.name === 'first') {
        state.bkColor[0] = isNumber(e.target.value);
    }

    if (e.target.name === 'second') {
        state.bkColor[1] = isNumber(e.target.value);
    }

    if (e.target.name === 'third') {
        state.bkColor[2] = isNumber(e.target.value);
    }

    if (e.target.name === 'fourth') {
        state.bkColor[3] = isNumber(e.target.value);
    }

    if (e.target.name === 'fifth') {
        state.bkColor[4] = isNumber(e.target.value);
    }

    if (e.target.name === 'sixth') {
        state.bkColor[5] = isNumber(e.target.value);
    }
    console.log(state.bkColor);

    document.body.style.backgroundColor = `#${state.bkColor.join('')}`;
    document.getElementById(
        'new-style',
    ).innerText = `background-color: #${state.bkColor.join('')}`;
};
