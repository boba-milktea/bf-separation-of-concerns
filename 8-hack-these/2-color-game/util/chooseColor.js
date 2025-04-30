import { state } from '../data.js';
export const chooseColor = () => {
    const random = Math.floor(Math.random() * state.colors.length);
    return state.colors[random];
};
