import { dom } from '../dom/dom.js';
import { state } from '../data.js';
import { showMessage } from '../components/showMessage.js';
import { myBox } from '../components/myBox.js';
import { random } from '../util/random.js';

export const handleClick = () => {
    state.inPlay = true;
    dom.button.style.display = 'none';
    dom.directions.style.display = 'none';
    dom.results.innerHTML = '';
    state.count = 0;
    showMessage('starting...', dom.message);
    state.playArea.timer = setTimeout(() => {
        const maxHeight = dom.gameArea.clientHeight;
        const maxWidth = dom.gameArea.clientWidth;
        const boxDom = myBox(maxHeight, maxWidth);
        dom.gameArea.appendChild(boxDom);
    }, random(4000));
};
