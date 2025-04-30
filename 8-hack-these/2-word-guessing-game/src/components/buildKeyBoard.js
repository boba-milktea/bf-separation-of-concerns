import { dom } from '../dom/dom.js';

export const buildKeyBoard = (i) => {
    for (let x = 0; x < i; x++) {
        let temp = String.fromCharCode(65 + x);
        const div = document.createElement('div');
        div.classList.add('letter');
        div.myLetter = temp;
        div.innerHTML = temp;
        dom.output1.appendChild(div);
    }
};
