import { dom } from '../dom.js';

export const displayRandom = (random) => {
    dom.coin.style.backgroundImage =
        random === 1 ? "url('./heads.png')" : "url('./tails.png')";
};
