export const gameOver = (btn, guessInput, max) => {
    btn.innerText = 'Restart Game';
    guessInput.style.display = 'none';
    btn.classList.add('replay');
    return (max += 5);
};
