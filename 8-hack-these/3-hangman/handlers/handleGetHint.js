import { state } from '../data.js';
import { dom } from '../dom.js';

export const handleGetHint = () => {
    const catIndex = state.categories.indexOf(state.chosenCategory);
    const hintIndex = state.chosenCategory.indexOf(state.word);
    dom.showClue.innerText = `Clue: - ${state.hints[catIndex][hintIndex]}`;
};
