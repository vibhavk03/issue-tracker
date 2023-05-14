const createProjectBtn = document.getElementById('create-project-btn');
const modalContainer = document.getElementById('modal-container');
const closeModalBtn = document.getElementById('create-project-close-modal-btn');

createProjectBtn.addEventListener('click', () => {
  console.log('12345678');
  modalContainer.classList.add('show-modal');
});

closeModalBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show-modal');
});
