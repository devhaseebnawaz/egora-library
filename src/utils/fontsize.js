export const getFontSize = (baseFontSize, screen, smallScreeSize) => {
    return screen ? smallScreeSize : baseFontSize;
};

export const getIconWidthHeight = (baseWidthHeight, screen, customeWidthHeight) => {
    return screen ? customeWidthHeight : baseWidthHeight;
};