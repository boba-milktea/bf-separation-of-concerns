export const clickHandler = (e) => {
    if (e.target.dataset.selected === 'yes') {
        e.target.dataset.selected = 'no';
    } else {
        e.target.dataset.selected = 'yes';
    }

    if (e.target.className === 'hidden') {
        e.target.className = 'visible';
    } else {
        e.target.className = 'hidden';
    }
};
