export const buildKeyBoard = (i) => {
    let temp = String.fromCharCode(65 + i);
    const div = document.createElement('div');
    div.classList.add('letter');
    div.myLetter = temp;
    div.innerHTML = temp;
    return div;
};
