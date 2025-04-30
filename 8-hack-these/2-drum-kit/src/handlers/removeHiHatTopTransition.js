export const removeHiHatTopTransition = (e) => {
    if (e.propertyName !== 'top') return;
    e.target.style.top = '166px';
};
