import { words, renderWords, saveWords, filters } from './functions';
import moment from 'jalali-moment';

// TODO: problem in ...item spread
const editWord = (id, title, meaning) => {
  const newArray = words.map((item) =>
    item.id === id
      ? {
          title,
          meaning,
          updated: moment().valueOf(),
        }
      : item
  );

  saveWords(newArray);
  renderWords(newArray, filters);
};

export default editWord;
