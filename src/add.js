import { words, renderWords, saveWords, filters } from './functions';
import { v4 as uuidv4 } from 'uuid';
import moment from 'jalali-moment';

const addWord = (title, meaning) => {
  words.push({
    id: uuidv4(),
    title,
    meaning,
    created: moment().locale('fa').format('YYYY/M/D'),
    updated: moment().locale('fa').format('YYYY/M/D'),
  });
  saveWords(words);
  renderWords(words, filters);
};

export default addWord;
