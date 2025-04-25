/**
 * render a paragraph with optional styling
 *
 * @param {string} text - the paragraph text
 * @param {string[]} [classList=[]] - an array of classes to apply
 * @returns {HTMLParagraphElement} a rendered paragraph element
 */
export const paragraph = (text, classList = []) => {
    const pEl = document.createElement('p');
    pEl.innerHTML = text;

    for (const style of classList) {
        pEl.classList.add(style);
    }

    return pEl;
};
