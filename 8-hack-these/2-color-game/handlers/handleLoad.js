import { setupSquares } from '../components/setupSquares.js';
import { state } from '../data.js';
import { dom } from '../dom.js';
import { reset } from '../components/reset.js';
import { setupMode } from '../components/setupMode.js';

export const handleLoad = () => {
    reset();
    dom.colorDisplay.textContent = state.pickedColor;
    setupSquares();
    setupMode();
};
