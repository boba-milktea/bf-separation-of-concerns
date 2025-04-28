import { state } from '../data.js';

export const handleReset = () => {
    state.board = [null, null, null, null, null, null, null, null];
    state.players.next = 'X';
    state.players.previous = 'O';
    state.winner = null;
    const tdEls = document.querySelectorAll('td');
    tdEls.forEach((td) => (td.innerText = ''));
};
