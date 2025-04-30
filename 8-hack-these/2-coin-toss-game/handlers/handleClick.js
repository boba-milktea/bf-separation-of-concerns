import { dom } from '../dom.js';
import { displaySelections } from '../components/displaySelections.js';
import { displayRandom } from '../components/displayRandom.js';
import { tallyScore } from '../components/tallyScore.js';

export const handleClick = (e) => {
    const random = Math.round(Math.random());
    const computerPick = Math.round(Math.random());

    let computerSelection;
    computerSelection = computerPick === 1 ? 'heads' : 'tails';

    //spin the coin
    dom.coin.classList.add('animate');

    const userSelection = e.target.id;
    let userPick;
    userPick = userSelection === 'heads' ? 1 : 0;

    displaySelections(userSelection, computerSelection);
    displayRandom(random);

    setTimeout(() => {
        tallyScore(random, userPick, computerPick);
        dom.coin.classList.remove('animate');
    }, 2000);
};
