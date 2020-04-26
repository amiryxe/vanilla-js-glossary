import { words, renderWords, saveWords, filters } from './functions';
import moment from 'jalali-moment';

// TODO: problem in ...item spread
const editWord = (id, title, meaning, created) => {
  const newArray = words.map((item) =>
    item.id === id
      ? {
          id,
          title,
          meaning,
          updated: moment().valueOf(),
          created: item.created,
        }
      : item
  );

  saveWords(newArray);
  renderWords(newArray, filters);
};

export default editWord;
