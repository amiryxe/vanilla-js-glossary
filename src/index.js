import 'vazir-font/dist/font-face.css';
import 'bulma/css/bulma.css';
import './styles/main.scss';

import add from './add';
import { words, renderWords, filters } from './functions';

// Show Words
if (localStorage.getItem('words')) {
  renderWords(words, filters);
}

// Open/Close Add Modal
document.querySelector('.add-btn').addEventListener('click', () => {
  document.querySelector('#addModal').classList.add('is-active');
});

document.querySelectorAll('.closeModal').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('#addModal').classList.remove('is-active');
  });
});

document.querySelectorAll('.edit-modal').forEach((item) => {
  item.addEventListener('click', (e) => {
    const itemId = e.target.id;
    words.forEach((item) => {
      if (item.id === itemId) {
        const modal = document.querySelector('#addModal');
        modal.classList.add('is-active');
        modal.querySelector('#word_title').value = item.title;
        modal.querySelector('#word_meaning').value = item.meaning;
        modal.querySelector('.is-success').textContent = 'ویرایش';
        modal
          .querySelector('.is-success')
          .classList.replace('is-success', 'is-info');
        // modal.querySelector('form').id = 'editModal';
        // document.querySelector('#editModal').addEventListener('submit', (e) => {
        //   e.target.elements.wordTitle.value = item.title;
        //   e.target.elements.wordMeaning.value = item.meaning;
        //   add(title, meaning);
        //   e.target.elements.wordTitle.value = '';
        //   e.target.elements.wordMeaning.value = '';
        // });
      }
    });
  });
});

// Add Word
document.querySelector('#addForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.elements.wordTitle.value;
  const meaning = e.target.elements.wordMeaning.value;
  add(title, meaning);
  e.target.elements.wordTitle.value = '';
  e.target.elements.wordMeaning.value = '';
});

// Search
document.querySelector('#search_field').addEventListener('input', (e) => {
  filters.searchTitle = e.target.value.toLowerCase();

  renderWords(words, filters);
});
