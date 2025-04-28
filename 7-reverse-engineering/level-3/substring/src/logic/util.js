const modifyText = (string, begin, end) => {
    const beginNum = Number(begin);
    const endNum = Number(end);

    return string.slice(beginNum, endNum + 2);
};

export default modifyText;
