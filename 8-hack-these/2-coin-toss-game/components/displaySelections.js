import { dom } from '../dom.js';

export const displaySelections = (user, computer) => {
    dom.playerSelection.style.color = user === 'heads' ? 'green' : 'blue';
    dom.computerSelection.style.color = computer === 'heads' ? 'green' : 'blue';
    dom.playerSelection.innerText = `${user}`;
    dom.computerSelection.innerText = `${computer}`;
};
