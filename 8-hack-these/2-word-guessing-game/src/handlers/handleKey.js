import { state } from '../data.js';
import { dom } from '../dom/dom.js';

export const handleKey = (e, guessingLetters) => {
    const target = e.target;
    let counter = 0;
    let guess = 0;

    target.removeEventListener('click', handleKey);
    target.classList.add('done');

    guessingLetters.forEach((letter) => {
        if (letter.innerText != '_') {
            counter++;
        }
        if (letter.myLetter.toUpperCase() === target.innerText) {
            letter.innerText = target.innerText;
            guess++;
        }
    });

    if (guess > 0) {
        const mul = guess > 1 ? 'times' : 'time';
        state.resultMessage = `You found ${target.innerText} letter ${guess} ${mul}`;
        dom.message.style.color = 'green';
    } else {
        state.resultMessage = 'Not found';
        dom.message.style.color = 'red';
    }

    const letterLeft = guessingLetters.length - (guess + counter);
    dom.message.innerText = `${state.resultMessage}
    ${letterLeft} letters left`;
    if (letterLeft < 1) {
        dom.btn.style.display = 'block';
    }
};
