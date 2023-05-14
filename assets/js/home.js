const createProjectBtn = document.getElementById('create-project-btn');
const modalContainer = document.getElementById('modal-container');
const closeModalBtn = document.getElementById('create-project-close-modal-btn');

const projectTitleInput = document.getElementById('project-title-input');
const projectDescriptionInput = document.getElementById(
  'project-description-input'
);
const projectAuthorInput = document.getElementById('project-author-input');

createProjectBtn.addEventListener('click', () => {
  modalContainer.classList.add('show-modal');
});

closeModalBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show-modal');
  /* removea any left over values from modal */
  projectTitleInput.value = '';
  projectDescriptionInput.value = '';
  projectAuthorInput.value = '';
});
