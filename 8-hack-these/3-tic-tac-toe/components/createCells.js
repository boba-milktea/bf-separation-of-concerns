export const createCells = (i) => {
    const divEl = document.createElement('div');
    divEl.classList.add('cell');
    divEl.id = i;
    divEl.setAttribute('data-cell', '');
    return divEl;
};
