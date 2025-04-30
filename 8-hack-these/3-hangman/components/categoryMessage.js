import { dom } from '../dom.js';
import { state } from '../data.js';

export const categoryMessage = () => {
    dom.catagoryName.innerText =
        state.chosenCategory === state.categories[0]
            ? 'The Chosen Category Is Premier League Football Teams'
            : state.chosenCategory === state.categories[1]
            ? 'The Chosen Category Is Films'
            : state.chosenCategory === state.categories[2]
            ? 'The Chosen Category Is Cities'
            : '';
};
