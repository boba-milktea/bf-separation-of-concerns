import { dom } from '../dom/dom.js';
import { state } from '../data.js';
import { buildGuessing } from '../components/buildGuessing.js';
import { buildKeyBoard } from '../components/buildKeyBoard.js';
import { handleKey } from './handleKey.js';

export const handleClick = () => {
    const { message, output1, output2, btn } = dom;

    output1.innerHTML = '';
    output2.innerHTML = '';

    if (state.words.length > 0) {
        btn.style.display = 'none';
        state.words.sort(() => 0.5 - Math.random());
        let theWord = state.words.shift();
        state.solution = theWord.split('');
    } else {
        message.style.color = 'bliack';
        message.innerHTML = 'no more words';
    }

    state.solution.forEach((letter) => {
        const quessingElements = buildGuessing(letter);
        output2.append(quessingElements);
    });

    for (let i = 0; i < 26; i++) {
        const keyBoardEl = buildKeyBoard(i);
        dom.output1.appendChild(keyBoardEl);
    }

    const guessingLetters = document.querySelectorAll('.letter2');

    output1.addEventListener('click', (e) => handleKey(e, guessingLetters));
};
