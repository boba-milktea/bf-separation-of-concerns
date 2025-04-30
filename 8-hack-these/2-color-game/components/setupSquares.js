import { dom } from '../dom.js';
import { state } from '../data.js';
import { handleClick } from '../handlers/handleClick.js';

export const setupSquares = () => {
    for (let i = 0; i < dom.squares.length; i++) {
        dom.squares[i].backgroundColor = state.colors[i];
        dom.squares[i].addEventListener('click', handleClick);
    }
};
