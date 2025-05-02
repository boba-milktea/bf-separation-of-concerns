import { state } from '../data.js';
import { handleReset } from './handleReset.js';

export const handleModeClick = (mode) => {
    mode.classList.add('selected');
    if (mode.textContent === 'Easy') {
        state.numSquares = 3;
    } else {
        state.numSquares = 6;
    }
    handleReset();
};
