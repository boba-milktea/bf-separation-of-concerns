export const setBoardHoverClass = (
    boardClasses,
    classX,
    classCircle,
    circleTurn,
) => {
    boardClasses.remove(classX);
    boardClasses.remove(classCircle);
    boardClasses.add(circleTurn ? classCircle : classX);
};
