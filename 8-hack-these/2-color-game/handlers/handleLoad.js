import { setupSquares } from '../components/setupSquares.js';
import { state } from '../data.js';
import { dom } from '../dom.js';
import { setupMode } from '../components/setupMode.js';
import { handleReset } from './handleReset.js';

export const handleLoad = () => {
    handleReset();
    dom.colorDisplay.textContent = state.pickedColor;
    for (let i = 0; i < dom.squares.length; i++) {
        setupSquares(i, dom.squares, state.colors);
    }

    setupMode(dom.modeButtons);
};
