export const createComment = (showLives, lives, guesses, counter, space) => {
    console.log(lives);
    showLives.innerText = `You have ${lives} lives`;
    if (lives < 1) {
        showLives.innerText = 'Game Over';
    }

    if (guesses.length !== 0 && counter + space === guesses.length) {
        showLives.innerText = 'You Win!';
    }
};
