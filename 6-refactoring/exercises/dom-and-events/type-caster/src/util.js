/**
 * return a transformed sting
 * @param {string} type the data type
 * @param {string} string the input string
 * @returns {string} a string transformed to a certain data type
 */
const typeCaster = (type, string) => {
    let newValue;
    if (type === 'string') {
        newValue = String(string);
    } else if (type === 'number') {
        newValue = Number(string);
    } else if (type === 'boolean') {
        newValue = Boolean(string);
    } else {
        newValue = undefined;
    }
    return newValue;
};

export default typeCaster;
