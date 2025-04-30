export const createButtons = (letter) => {
    const liEl = document.createElement('li');
    liEl.id = 'letter';
    liEl.innerHTML = letter;
    return liEl;
};
