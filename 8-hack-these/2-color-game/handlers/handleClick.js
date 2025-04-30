import { state } from '../data.js';
import { dom } from '../dom.js';
import { changeColor } from '../components/changeColor.js';

export const handleClick = (e) => {
    const clickedColor = e.target.style.backgroundColor;
    if (clickedColor === state.pickedColor) {
        dom.messageDisplay.textContent = 'Correct!';
        dom.resetButton.textContent = 'Play Again';
        changeColor(state.pickedColor);
    } else {
        e.target.style.backgroundColor = '#232323';
        dom.messageDisplay.textContent = 'try again';
    }
};
