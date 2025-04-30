import { state } from '../data.js';

export const isDraw = () => {
    return state.inputs.every((input) => input !== null);
};
