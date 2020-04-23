const addWord = () => {
  // Open/Close Add Modal
  document.querySelector('.add-btn').addEventListener('click', () => {
    document.querySelector('#addModal').classList.add('is-active');
  });

  document.querySelectorAll('.closeModal').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelector('#addModal').classList.remove('is-active');
    });
  });

  // Card Template
  const cardTemplate = `
  <div class="card">
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

  // Add Word
  document.querySelector('#addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.elements.wordMeaning.value);
    console.log(e.target.elements.wordTitle.value);
  });
};

export default addWord;
