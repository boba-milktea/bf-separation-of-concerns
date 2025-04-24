import { LIST_CLASS } from '../../data/constants.js';

export const wordList = (arr = []) => {
    const ulEl = document.createElement('ul');
    ulEl.className = LIST_CLASS;

    for (const word of arr) {
        const liEl = document.createElement('li');
        liEl.innerText = word;
        ulEl.appendChild(liEl);
    }

    return ulEl;
};
