import { determineWinner } from './determine-winner.js';

/**
 * @jest-environment jsdom
 */

import { determineWinner } from './yourFileName'; // replace with the actual path

describe('determineWinner', () => {
    const mockBoard = (values) => {
        document.body.innerHTML = '';
        values.forEach((value, index) => {
            const cell = document.createElement('div');
            cell.id = String(index);
            cell.textContent = value;
            document.body.appendChild(cell);
        });
    };

    it('returns "X" when X wins horizontally', () => {
        mockBoard(['X', 'X', 'X', '', '', '', '', '', '']);
        expect(determineWinner()).toBe('X');
    });

    it('returns "O" when O wins diagonally', () => {
        mockBoard(['O', '', '', '', 'O', '', '', '', 'O']);
        expect(determineWinner()).toBe('O');
    });

    it('returns undefined when there is no winner', () => {
        mockBoard(['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X']);
        expect(determineWinner()).toBeUndefined();
    });
});
