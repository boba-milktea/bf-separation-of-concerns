export const clickHandler = () => {
    const query = document.getElementById('query');
    const queryValue = query.value;
    window.open(`https://duckduckgo.com/?q=${queryValue}`);
};
