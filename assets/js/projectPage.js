const createIssueBtn = document.getElementById('create-issue-btn');
const modalContainerProjectPage = document.getElementById(
  'modal-container-issue'
);
const closeModalBtnProjectPage = document.getElementById(
  'create-issue-close-modal-btn'
);

const issueTitleInput = document.getElementById('issue-title-input');
const issueDescriptionInput = document.getElementById(
  'issue-description-input'
);
const issueAuthorInput = document.getElementById('issue-author-input');
const checkboxLabels = document.getElementsByClassName('checkbox-labels');

/* show modal when create button clicked */
createIssueBtn.addEventListener('click', () => {
  modalContainerProjectPage.classList.add('show-modal');
});

/* hide modal and clear details when close button clicked */
closeModalBtnProjectPage.addEventListener('click', () => {
  modalContainerProjectPage.classList.remove('show-modal');
  /* remove any left over values from modal */
  issueTitleInput.value = '';
  issueDescriptionInput.value = '';
  issueAuthorInput.value = '';
  /* remove any checked boxes from modal */
  for (checkbox of checkboxLabels) {
    checkbox.checked = false;
  }
});
