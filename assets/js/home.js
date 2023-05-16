const createProjectBtn = document.getElementById('create-project-btn');
const modalContainer = document.getElementById('modal-container');
const closeModalBtn = document.getElementById('create-project-close-modal-btn');

const projectTitleInput = document.getElementById('project-title-input');
const projectDescriptionInput = document.getElementById(
  'project-description-input'
);
const projectAuthorInput = document.getElementById('project-author-input');

/* show modal when create button clicked */
createProjectBtn.addEventListener('click', () => {
  modalContainer.classList.add('show-modal');
});

/* hide modal and clear details when close button clicked */
closeModalBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show-modal');
  /* remove any left over values from modal */
  projectTitleInput.value = '';
  projectDescriptionInput.value = '';
  projectAuthorInput.value = '';
});
