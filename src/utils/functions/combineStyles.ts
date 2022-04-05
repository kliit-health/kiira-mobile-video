export const combineStyles = (list, styles) => {
    if (list) {
        return list.split(' ').reduce((acc, item) => {
            return { ...acc, ...styles[item] };
        }, {});
    } else {
        return styles;
    }
};
