export const buildGuessing = (letter) => {
    const div = document.createElement('div');
    div.classList.add('letter2');
    div.innerText = '_';
    div.myLetter = letter;
    return div;
};
