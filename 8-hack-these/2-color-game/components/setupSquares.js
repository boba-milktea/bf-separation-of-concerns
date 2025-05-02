import { handleClick } from '../handlers/handleClick.js';

export const setupSquares = (i, squares, colors) => {
    squares[i].backgroundColor = colors[i];
    squares[i].addEventListener('click', handleClick);
};
