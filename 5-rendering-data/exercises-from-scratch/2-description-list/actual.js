'use strict';

// helper function - https://stackoverflow.com/a/35953318
// used to convert object property names (camel case)
// into titles (words with spaces between them)
const camelCaseToTitleCase = (camelCaseString) => {
    const result = camelCaseString
        .replace(/([a-z])([A-Z][a-z])/g, '$1 $2')
        .replace(/([A-Z][a-z])([A-Z])/g, '$1 $2')
        .replace(/([a-z])([A-Z]+[a-z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z][a-z])/g, '$1 $2')
        .replace(/([a-z]+)([A-Z0-9]+)/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-rt-z][a-z]*)/g, '$1 $2')
        .replace(/([0-9])([A-Z][a-z]+)/g, '$1 $2')
        .replace(/([A-Z]{2,})([0-9]{2,})/g, '$1 $2')
        .replace(/([0-9]{2,})([A-Z]{2,})/g, '$1 $2')
        .trim();

    return result.charAt(0).toUpperCase() + result.slice(1);
};

const actual = (obj) => {
    const dlEl = document.createElement('dl');

    for (const key in obj) {
        if (!key.includes('_')) {
            const dtEl = document.createElement('dt');
            dtEl.innerText = camelCaseToTitleCase(key);
            const ddEl = document.createElement('dd');
            ddEl.innerText = obj[key];
            ddEl.className = 'value';
            dlEl.append(dtEl, ddEl);
        }
    }

    return dlEl;
};
