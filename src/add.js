import { words } from './functions';

const addWord = (title, meaning) => {
  words.push({
    title,
    meaning,
    created: '',
    updated: '',
  });
  console.log(words);
};

export default addWord;
