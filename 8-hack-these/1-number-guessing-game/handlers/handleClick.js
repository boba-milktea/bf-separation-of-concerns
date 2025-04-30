import { createMessage } from '../components/createMessage.js';
import { state } from '../data.js';
import { dom } from '../dom.js';
import { handleLoad } from './handleLoad.js';
import { gameOver } from '../components/gameOver.js';

export const handleClick = (e) => {
    if (e.target.classList.contains('replay')) {
        handleLoad();
        e.target.innerText = 'Guess';
        dom.guessInput.style.display = 'block';
        e.target.classList.remove('replay');
    } else {
        state.guesses++;
        let tempGuess = dom.guessInput.value;
        dom.guessInput.value = '';
        tempGuess = Number(tempGuess);
        if (isNaN(tempGuess)) {
            createMessage('Please enter only digits', 'red');
        } else if (tempGuess === state.num) {
            createMessage(
                `Correct guess of ${state.num} in ${state.guesses} guesses`,
                'green',
            );
            gameOver();
        } else {
            const holder =
                tempGuess > state.num
                    ? { clr: 'blue', mes: 'Was Lower' }
                    : { clr: 'purple', mes: 'Was Higher' };
            createMessage(holder.mes, holder.clr);
        }
    }
};
