import { state } from '../data.js';

export const placeMark = (cell, current) => {
    cell.classList.add(current);
    state.inputs[cell.id] = current;
};
