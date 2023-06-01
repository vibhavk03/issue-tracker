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

/* get issues display from HTML page */
let issuesRaw = document.getElementById('issues-data').getAttribute('data');
let issues = JSON.parse(issuesRaw);

/* get all authors from issues data */
let authors = [];
issues.forEach((issue) => {
  const author = issue.author;
  if (!authors.includes(author)) {
    authors.push(author);
  }
});

const filterByAuthorBtn = document.getElementById('filter-by-author-btn');
const modalContainerAuthors = document.getElementById(
  'modal-container-authors'
);
const filterAuthorsCloseModalBtn = document.getElementById(
  'filter-authors-close-modal-btn'
);
const closeAuthorModal = () => {
  modalContainerAuthors.classList.remove('show-modal');
};
/* show modal when filter authors button clicked */
filterByAuthorBtn.addEventListener('click', () => {
  modalContainerAuthors.classList.add('show-modal');
});
/* hide modal and clear details when close button clicked */
filterAuthorsCloseModalBtn.addEventListener('click', () => {
  closeAuthorModal();
  /* remove any checked boxes from modal */
  for (checkbox of checkboxLabels) {
    checkbox.checked = false;
  }
});

const populateAuthorDiv = document.getElementById('populate-author-div');
const filterAuthorsModalBtn = document.getElementById(
  'filter-authors-modal-btn'
);
/* clear authors display before rendering authors */
populateAuthorDiv.innerHTML = '';
/* populate authors for author filter modal */
if (authors.length > 0) {
  authors.forEach((author) => {
    populateAuthorDiv.innerHTML += `
    <div class="flex modal-checkbox">
      <input
        type="checkbox"
        name="checkbox-labels"
        id="checkbox-author-${author}"
        value="${author}"
        class="checkbox-labels"
      />
      <label for="checkbox-author-${author}">${author}</label>
    </div>
    `;
  });
} else {
  /* no issues so no authors available */
  populateAuthorDiv.innerHTML = '<div><h4>No Authors Available!</h4></div>';
}

const populateAuthorForm = document.getElementById('populate-author-form');
const issuesDisplayDiv = document.getElementById('issues-display');
/* when filter by author form is submitted */
populateAuthorForm.addEventListener('submit', (event) => {
  event.preventDefault();

  /* get checked authors from form */
  const checkedAuthors = Array.from(
    document.querySelectorAll('input[type=checkbox]:checked')
  ).map((item) => item.value);

  /* close modal */
  closeAuthorModal();

  /* clear all checked checkboxes */
  for (checkbox of checkboxLabels) {
    checkbox.checked = false;
  }

  /* filter issues according to checked authors */
  let filteredIssues = [];
  if (checkedAuthors.length === 0) {
    /* if no authors selected for filtering but filter issues button clicked */
    /* then display all issues */
    filteredIssues = issues;
  } else {
    /* filter issues according to checked authors */
    issues.forEach((issue) => {
      if (checkedAuthors.includes(issue.author)) {
        filteredIssues.push(issue);
      }
    });
  }

  /* clear issues display before rendering filtered issues */
  issuesDisplayDiv.innerHTML = '';
  /* render filtered issues */
  filteredIssues.forEach((issue) => {
    /* collect all labels in HTML format */
    let labelsHTML = '';
    issue.labels.forEach((label) => {
      labelsHTML += `<span>${label}</span>`;
    });
    /* this is _issue.ejs code */
    issuesDisplayDiv.innerHTML += `
    <div class="issue-container flex" id="issue-${issue._id}">
    <div class="issue-title">${issue.title}</div>
    <div class="issue-labels flex">
    ${labelsHTML}
    </div>
    <div class="issue-description">${issue.description}</div>
    <div class="issue-author">Author: <span>${issue.author}</span></div>
    <div class="">
    <form action="/issue/delete/${issue._id}" method="post" class="">
      <button id="" class="primary-btn delete-btn">Delete Issue</button>
    </form>
    </div>
    </div>
    `;
  });
});

const filterByLabelBtn = document.getElementById('filter-by-label-btn');
const modalContainerFilterByLabel = document.getElementById(
  'modal-container-filter-label'
);
const filterByLabelCloseModalBtn = document.getElementById(
  'filter-label-close-modal-btn'
);
const closeFilterByLabelModal = () => {
  modalContainerFilterByLabel.classList.remove('show-modal');
};
/* show modal when filter by label button clicked */
filterByLabelBtn.addEventListener('click', () => {
  modalContainerFilterByLabel.classList.add('show-modal');
});
/* hide modal and clear details when close button clicked */
filterByLabelCloseModalBtn.addEventListener('click', () => {
  closeFilterByLabelModal();
  /* remove any checked boxes from modal */
  for (checkbox of checkboxLabels) {
    checkbox.checked = false;
  }
});

const filterByLabelForm = document.getElementById('filter-label-form');
/* when filter by label form is submitted */
filterByLabelForm.addEventListener('submit', (event) => {
  event.preventDefault();

  /* get checked authors from form */
  const checkedLabels = Array.from(
    document.querySelectorAll('input[type=checkbox]:checked')
  ).map((item) => item.value);

  /* close modal */
  closeFilterByLabelModal();

  /* clear all checked checkboxes */
  for (checkbox of checkboxLabels) {
    checkbox.checked = false;
  }

  /* filter issues according to checked labels */
  let filteredIssues = [];
  if (checkedLabels.length === 0) {
    /* if no labels selected for filtering but filter issues button clicked */
    /* then display all issues */
    filteredIssues = issues;
  } else {
    /* filter issues according to labels */
    issues.forEach((issue) => {
      const issueLabels = issue.labels;
      checkedLabels.forEach((checkedLabel) => {
        if (
          issueLabels.includes(checkedLabel) &&
          !filteredIssues.includes(issue)
        ) {
          /* if any checked label is included in issues label -> filter that issue */
          filteredIssues.push(issue);
        }
      });
    });
  }

  /* clear issues display before rendering filtered issues */
  issuesDisplayDiv.innerHTML = '';
  if (filteredIssues.length === 0) {
    /* if filtered issues are zero */
    issuesDisplayDiv.innerHTML = `
      <div class="issue-container flex no-issues-after-filter">
        <div>No Issues</div>
      </div>
    `;
  } else {
    /* render filtered issues */
    filteredIssues.forEach((issue) => {
      /* collect all labels in HTML format */
      let labelsHTML = '';
      issue.labels.forEach((label) => {
        labelsHTML += `<span>${label}</span>`;
      });
      /* this is _issue.ejs code */
      issuesDisplayDiv.innerHTML += `
      <div class="issue-container flex" id="issue-${issue._id}">
      <div class="issue-title">${issue.title}</div>
      <div class="issue-labels flex">
      ${labelsHTML}
      </div>
      <div class="issue-description">${issue.description}</div>
      <div class="issue-author">Author: <span>${issue.author}</span></div>
      <div class="">
      <form action="/issue/delete/${issue._id}" method="post" class="">
        <button id="" class="primary-btn delete-btn">Delete Issue</button>
      </form>
      </div>
      </div>
      `;
    });
  }
});
