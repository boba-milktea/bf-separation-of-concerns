import { state } from '../data.js';
import { decideWinner } from '../logic/decideWinner.js';

export const handleClick = (e) => {
    const index = e.target.id;
    const cell = e.target;

    state.board[index] = state.players.next;
    const prevPlayer = state.players.previous;
    state.players.previous = state.players.next;
    state.players.next = prevPlayer;

    cell.innerText = state.board[index];
    const result = decideWinner();

    console.log(result);
};
