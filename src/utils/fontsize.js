export const getFontSize = (baseFontSize, screen, smallScreeSize) => {
    return screen ? smallScreeSize : baseFontSize;
};