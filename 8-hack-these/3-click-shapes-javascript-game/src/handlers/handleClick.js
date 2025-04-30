import { dom } from '../dom/dom.js';
import { state } from '../data.js';
import { showMessage } from '../util/showMessage.js';
import { showBox } from '../util/showBox.js';

export const handleClick = () => {
    state.inPlay = true;
    dom.button.style.display = 'none';
    dom.directions.style.display = 'none';
    dom.results.innerHTML = '';
    state.count = 0;
    showMessage('Starting...');
    showBox();
};
