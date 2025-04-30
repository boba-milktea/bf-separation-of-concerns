import { random } from '../util/random.js';
import { setTopMargin } from '../util/setTopMargin.js';
import { setLeftMargin } from '../util/setLeftMargin.js';
import { getColor } from '../util/getColor.js';
import { hit } from '../handlers/handleHit.js';
import { dom } from '../dom/dom.js';

export const myBox = () => {
    const divEl = document.createElement('div');
    divEl.classList.add('box');
    divEl.style.top = random(setTopMargin()) + 'px';
    divEl.style.left = random(setLeftMargin()) + 'px';
    divEl.style.backgroundColor = getColor();
    divEl.start = new Date().getTime();
    divEl.addEventListener('click', hit);
    dom.gameArea.appendChild(divEl);
};
