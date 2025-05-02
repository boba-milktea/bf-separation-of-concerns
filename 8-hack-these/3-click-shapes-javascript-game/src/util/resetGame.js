export const resetGame = (playArea, inPlay, button) => {
    clearTimeout(playArea.timer);
    inPlay = false;
    button.style.display = 'block';
};
