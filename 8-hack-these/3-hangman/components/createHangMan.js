import { state } from '../data.js';

export const createHangMan = () => {
    const drawMan = state.lives;
    state.drawArray[drawMan]();
};
