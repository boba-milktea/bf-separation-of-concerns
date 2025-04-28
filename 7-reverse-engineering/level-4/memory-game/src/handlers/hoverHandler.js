export const mouseOverHandler = (e) => {
    e.target.className = 'visible';
};

export const mouseOutHandler = (e) => {
    e.target.className = 'hidden';
    if (e.target.dataset.selected === 'yes') {
        e.target.className = 'visible';
    }
};
