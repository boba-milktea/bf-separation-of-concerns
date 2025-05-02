import { state } from '../data.js';
import { dom } from '../dom.js';
import { chooseColor } from '../util/chooseColor.js';
import { genRandomColors } from '../util/genRandomColor.js';

export const handleReset = () => {
    state.colors = genRandomColors(state.numSquares);
    state.pickedColor = chooseColor();
    dom.colorDisplay.textContext = state.pickedColor;
    dom.h1.style.backgroundColor = '#2C8E99';
    dom.resetButton.textContent = 'New Colors';
    dom.messageDisplay.textContent = '';

    for (let i = 0; i < dom.squares.length; i++) {
        if (state.colors[i]) {
            dom.squares[i].style.display = 'block';
            dom.squares[i].style.backgroundColor = state.colors[i];
        } else {
            dom.squares[i].style.display = 'none';
        }
    }
};
