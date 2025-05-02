export const displayRandom = (random, coin) => {
    coin.style.backgroundImage =
        random === 1 ? "url('./heads.png')" : "url('./tails.png')";
};
