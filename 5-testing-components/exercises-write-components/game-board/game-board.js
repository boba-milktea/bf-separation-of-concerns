/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */

const gameBoard = (arrayOfArrays) => {
    const tableEl = document.createElement('table');
    for (let i = 0; i < arrayOfArrays.length; i++) {
        const trEl = document.createElement('tr');
        for (let j = 0; j < arrayOfArrays[i].length; j++) {
            const tdEl = document.createElement('td');
            tdEl.innerText = arrayOfArrays[i][j];
            trEl.append(tdEl);
        }
        tableEl.append(trEl);
    }
    return tableEl;
};

export default gameBoard;
