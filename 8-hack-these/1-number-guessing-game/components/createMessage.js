import { dom } from '../dom.js';

export const createMessage = (message, clr) => {
    dom.message.innerText = message;
    dom.message.style.color = clr || 'black';
    dom.guessInput.style.borderColor = clr || 'black';
    dom.btn.style.backgroundColor = clr || 'black';
    dom.btn.style.color = 'white';
};
