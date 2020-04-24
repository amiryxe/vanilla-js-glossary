export let words = [];

// Card Template
const cardTemplate = `
  <div class="card" style="margin-bottom: 1rem">
        <header class="card-header">
          <p class="card-header-title">
            عنوان کلمه در اینجا
          </p>
          <span class="card-header-icon">
            11:09 PM - 1 Jan 2016
          </span>
        </header>
        <div class="card-content">
          <div class="content">
            معنی کلمه در اینجا
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">
            <i class="fa fa-edit has-text-info" style="margin-left: 10px;"></i>
            ویرایش
          </a>
          <a href="#" class="card-footer-item">
            <i
              class="fa fa-trash has-text-danger"
              style="margin-left: 10px;"
            ></i>
            پاک کردن
          </a>
        </footer>
      </div>
    </div>
  `;

export const renderWords = (words, filters) => {
  const htmlWordList = document.querySelector('#words_list');
  htmlWordList.innerHTML = '';
  words.forEach((item) => {
    const itemBox = document.createElement('div');
    itemBox.innerHTML = cardTemplate;
    itemBox.querySelector('.card-header-title').textContent = item.title;
    itemBox.querySelector('.content').textContent = item.meaning;
    htmlWordList.appendChild(itemBox);
  });
};
