'use strict';

const actual = (linksData) => {
    const divEl = document.createElement('div');

    const h3El = document.createElement('h3');
    h3El.textContent = linksData.topic;
    divEl.appendChild(h3El);

    const entryToLi = (entry) => {
        const [key, value] = entry;
        const liEl = document.createElement('li');
        const aEl = document.createElement('a');
        aEl.innerHTML = key;
        aEl.href = value;
        aEl.target = '_blank';
        liEl.appendChild(aEl);
        console.log(liEl);
        return liEl;
    };

    const appendLiToList = (listEl, nextLi) => {
        listEl.appendChild(nextLi);
        return listEl;
    };

    const ulEl = Object.entries(linksData.links)
        .map((entry) => entryToLi(entry))
        .reduce(appendLiToList, document.createElement('ul'));

    divEl.appendChild(ulEl);

    return divEl;
};
