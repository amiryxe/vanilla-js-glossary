import moment from 'jalali-moment';
import edit from './edit';

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
  sortBy: 'byCreated',
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
    <a href="#" class="card-footer-item edit-modal">
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

  sortWords(words, filters.sortBy);

  // set data to card
  words.forEach((item) => {
    if (item.title.toLowerCase().includes(filters.searchTitle)) {
      const itemBox = document.createElement('div');
      itemBox.innerHTML = cardTemplate;
      itemBox.querySelector('.card-header-title').textContent = item.title;
      itemBox.querySelector('.content').textContent = item.meaning;
      itemBox.querySelector('.edit-modal').id = item.id;
      itemBox.querySelector('.card-header-icon').textContent = moment(
        item.created
      )
        .locale('fa')
        .format('YYYY/M/D');

      if (item.created < item.updated) {
        itemBox.querySelector(
          '.content'
        ).innerHTML += `<p class="last-updated">آخرین تغییر در ${moment(
          item.updated
        )
          .locale('fa')
          .fromNow()}</p>`;
      }

      // delete
      itemBox.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.preventDefault();
        deleteWord(item.id);
      });

      // edit
      itemBox.querySelector('.edit-modal').addEventListener('click', (e) => {
        e.preventDefault();

        const modal = document.querySelector('#editModal');
        modal.classList.add('is-active');
        modal.querySelector('#word_title_edit').value = item.title;
        modal.querySelector('#word_meaning_edit').value = item.meaning;

        modal.querySelector('#submitEdit').addEventListener('submit', (e) => {
          e.preventDefault();
          const title = e.target.elements.wordTitle.value;
          const meaning = e.target.elements.wordMeaning.value;
          edit(item.id, title, meaning);
        });
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

// Sort
export const sortWords = (words, sortBy) => {
  if (sortBy === 'byEdited') {
    return words.sort((a, b) => {
      if (a.updated > b.updated) {
        return -1;
      } else if (a.updated > b.updated) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return words.sort((a, b) => {
      if (a.created > b.created) {
        return -1;
      } else if (a.created > b.created) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return words;
  }
};
