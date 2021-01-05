export const addHashtag = (words = []) => {
  return words.map((word) => `#${word}`);
};
