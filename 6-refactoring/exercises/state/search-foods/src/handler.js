import search from './util.js';

export const searchFoodsHandler = () => {
    const query = prompt('enter a search query');
    if (query === null || query === '') {
        return;
    }

    const results = search(query);

    const message = `foods matching "${query}":${results}`;
    alert(message);
};
