import { words, renderWords } from './functions';
import { v4 as uuidv4 } from 'uuid';

const addWord = (title, meaning) => {
  words.push({
    id: uuidv4(),
    title,
    meaning,
    created: '',
    updated: '',
  });
  renderWords(words, '');
};

export default addWord;
