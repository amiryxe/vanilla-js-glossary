import { words } from './functions';
import { v4 as uuidv4 } from 'uuid';

const addWord = (title, meaning) => {
  words.push({
    id: uuidv4(),
    title,
    meaning,
    created: '',
    updated: '',
  });
  console.log(words);
};

export default addWord;
