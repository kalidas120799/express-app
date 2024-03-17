export const groupBy = (key) => (array) =>
    array.reduce((obj, item) => {
        const value = item[key];
        obj[value] = (obj[value] || []).concat(item);
        return obj;
    }, {});