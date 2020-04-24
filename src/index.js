import 'vazir-font/dist/font-face.css';
import 'bulma/css/bulma.css';
import './styles/main.scss';

import add from './add';
import { words, renderWords } from './functions';

// filters
let filters = {
  searchTitle: '',
};

// Open/Close Add Modal
document.querySelector('.add-btn').addEventListener('click', () => {
  document.querySelector('#addModal').classList.add('is-active');
});

document.querySelectorAll('.closeModal').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('#addModal').classList.remove('is-active');
  });
});

// Add Word
document.querySelector('#addForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.elements.wordTitle.value;
  const meaning = e.target.elements.wordMeaning.value;
  add(title, meaning);
});

// Search
document.querySelector('#search_field').addEventListener('input', (e) => {
  filters.searchTitle = e.target.value.toLowerCase();

  renderWords(words, filters);
});

// Show Words
if (localStorage.getItem('words')) {
  renderWords(words, filters);
}
