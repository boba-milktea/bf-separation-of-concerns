export const categoryMessage = (categoryName, chosenCategory, categories) => {
    catagoryName.innerText =
        chosenCategory === categories[0]
            ? 'The Chosen Category Is Premier League Football Teams'
            : chosenCategory === categories[1]
            ? 'The Chosen Category Is Films'
            : chosenCategory === categories[2]
            ? 'The Chosen Category Is Cities'
            : '';
};
