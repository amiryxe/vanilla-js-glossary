import { words, renderWords, saveWords, filters } from './functions';

const editWord = (id, title, meaning) => {
  const newArray = words.map((item) =>
    item.id === id
      ? {
          title,
          meaning,
        }
      : item
  );

  saveWords(newArray);
  renderWords(newArray, filters);
};

export default editWord;
