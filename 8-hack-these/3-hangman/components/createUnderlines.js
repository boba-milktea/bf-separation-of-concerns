export const createUnderlines = (letter, space, guesses) => {
    const guessLetter = document.createElement('li');
    guessLetter.className = 'guess';
    if (letter === '-') {
        guessLetter.textContent = '-';
        space = 1;
    } else {
        guessLetter.textContent = '_';
    }
    guesses.push(guessLetter);
    return guessLetter;
};
