export const searchObject = (object, value) => {
  if (object && value) {
    return Object.values(object).some((key) => {
      if (typeof key !== 'string' && typeof key !== 'object') {
        return;
      }
      if (typeof key === 'object') {
        return searchObject(key, value);
      }
      const item = key.toLowerCase();
      const searchString = value.toLowerCase();
      return item.includes(searchString);
    });
  }
};
