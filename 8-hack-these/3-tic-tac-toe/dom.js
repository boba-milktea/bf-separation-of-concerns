export const dom = {
    cellElements: document.querySelectorAll('[data-cell]'),
    board: document.getElementById('board'),
    winningMessageElement: document.getElementById('winningMessage'),
    restartButton: document.getElementById('restartButton'),
    winningMessageTextElement: document.querySelector(
        '[data-winning-message-text]',
    ),
};
