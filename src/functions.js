export let words = [
  {
    title: '',
    meaning: '',
    created: '',
    updated: '',
  },
];

export const renderWords = (words, filters) => {
  const htmlWordList = document.querySelector('#words_list');
  htmlWordList.innerHTML = '';
  words.forEach((item) => {
    htmlWordList.innerHTML += `<p>${item.title}</p>`;
  });
};
