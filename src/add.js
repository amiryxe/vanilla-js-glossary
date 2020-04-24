import { words, renderWords, saveWords, filters } from './functions';
import { v4 as uuidv4 } from 'uuid';
import moment from 'jalali-moment';

const addWord = (title, meaning) => {
  const timestamp = moment().valueOf();
  words.push({
    id: uuidv4(),
    title,
    meaning,
    created: timestamp,
    updated: timestamp,
  });
  saveWords(words);
  renderWords(words, filters);
};

export default addWord;
