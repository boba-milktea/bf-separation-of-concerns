'use strict';

const actual = (level, text, styling) => {
    const hEl = document.createElement(`h${level}`);
    hEl.innerText = text;
    hEl.className = styling;
    return hEl;
};
