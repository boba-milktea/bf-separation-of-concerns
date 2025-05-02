import { dom } from '../dom.js';

export const createMessage = (text, clr, message, guessInput, btn) => {
    dom.message.innerText = text;
    dom.message.style.color = clr || 'black';
    dom.guessInput.style.borderColor = clr || 'black';
    dom.btn.style.backgroundColor = clr || 'black';
    dom.btn.style.color = 'white';
};
