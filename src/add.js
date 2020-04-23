const addWord = () => {
  document.querySelector('.add-btn').addEventListener('click', () => {
    document.querySelector('#addModal').classList.add('is-active');
  });

  document.querySelectorAll('.closeModal').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelector('#addModal').classList.remove('is-active');
    });
  });
};

export default addWord;
