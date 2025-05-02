import { state } from '../data.js';
import { dom } from '../dom/dom.js';
import { myBox } from '../components/myBox.js';
import { showMessage } from '../components/showMessage.js';
import { resetGame } from '../util/resetGame.js';
import { random } from '../util/random.js';
import { renderCount } from '../util/renderCount.js';

export const hit = (e) => {
    const start = e.target.start;
    const end = new Date().getTime();
    const duration = (end - start) / 1000;
    const maxDuration = 1;

    showMessage(`it took you ${duration} seconds to click`, dom.message);
    clearTimeout(state.playArea.timer);
    if (duration > maxDuration) {
        dom.gameArea.children[0].remove();
        dom.results.innerHTML = `Too Slow! <span id="loser">You Lose!</span> Your score was ${state.count}.<br> Click the start button to play again!`;
        resetGame(state.playArea.timer, state.inPlay, dom.button);
    } else {
        state.count++;
        dom.gameArea.children[0].remove();
        if (state.count === 15) {
            dom.results.innerHTML = `You reached ${renderCount(
                state.count,
            )}! <span id="winner">You win!</span> <br> Click start to Play again.`;
            resetGame(state.playArea.timer, state.inPlay, dom.button);
        } else {
            dom.results.innerHTML = `Score: ${renderCount(state.count)} of 3`;
            state.playArea.timer = setTimeout(() => {
                const maxHeight = dom.gameArea.clientHeight;
                const maxWidth = dom.gameArea.clientWidth;
                const boxDom = myBox(maxHeight, maxWidth);
                dom.gameArea.appendChild(boxDom);
            }, random(4000));
        }
    }
};
