import { dom } from '../dom.js';

export const changeColor = (color) => {
    dom.squares.forEach((square) => {
        square.style.backgroundColor = color;
        dom.h1.style.backgroundColor = color;
    });
};
