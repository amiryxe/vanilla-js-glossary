import moment from 'jalali-moment';

// Get words
const getWords = () => {
  const wordsJson = localStorage.getItem('words');
  try {
    return wordsJson !== null ? JSON.parse(wordsJson) : [];
  } catch (error) {
    return [];
  }
};

export let words = getWords();

export let filters = {
  searchTitle: '',
};

// Save words to storage
export const saveWords = (words) => {
  localStorage.setItem('words', JSON.stringify(words));
};

// Card Template
const cardTemplate = `
<div class="card" style="margin-bottom: 1rem">
  <header class="card-header">
    <p class="card-header-title"></p>
    <span class="card-header-icon"></span>
  </header>
  <div class="card-content">
    <div class="content"></div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item edit-link">
      <i class="fa fa-edit has-text-info" style="margin-left: 10px;"></i>
      ویرایش
    </a>
    <a href="#" class="card-footer-item delete-btn">
      <i
        class="fa fa-trash has-text-danger"
        style="margin-left: 10px;"
      ></i>
      پاک کردن
    </a>
  </footer>
</div>
`;

// Render Words
export const renderWords = (words, filters) => {
  const htmlWordList = document.querySelector('#words_list');
  htmlWordList.innerHTML = '';

  words.forEach((item) => {
    if (item.title.toLowerCase().includes(filters.searchTitle)) {
      const itemBox = document.createElement('div');
      itemBox.innerHTML = cardTemplate;
      itemBox.querySelector('.card-header-title').textContent = item.title;
      itemBox.querySelector('.content').textContent = item.meaning;
      itemBox.querySelector('.card-header-icon').textContent = moment(
        item.created
      )
        .locale('fa')
        .format('YYYY/M/D');
      itemBox.querySelector('.edit-link').href = `./edit-word.html#${item.id}`;
      itemBox.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.preventDefault();
        deleteWord(item.id);
      });
      htmlWordList.appendChild(itemBox);
    }
  });
};

// Delete Word
const deleteWord = (id) => {
  const wordIndex = words.findIndex((item) => item.id === id);
  wordIndex > -1 && words.splice(wordIndex, 1);

  saveWords(words);
  renderWords(words, filters);
};
