const Project = require('../models/project');
const Issue = require('../models/issue');

module.exports = {
  create: async (req, res) => {
    const {
      'issue-title': title,
      'issue-description': description,
      'issue-author': author,
      'checkbox-labels': labels,
    } = req.body;
    try {
      const issue = await Issue.create({
        title,
        description,
        author,
        labels,
        project: req.params.id,
      });
      const project = await Project.findById(req.params.id);
      project.issues.push(issue);
      await project.save();
    } catch (error) {
      console.log(`Error in creating an issue : ${error}`);
    }
    res.redirect('back');
  },
  delete: async (req, res) => {
    try {
      const issue = await Issue.findByIdAndRemove(req.params.id);
      const projectId = issue.project;
      /* removing issue from project issues array */
      await Project.findByIdAndUpdate(projectId, {
        $pull: { issues: req.params.id },
      });
    } catch (error) {
      console.log(`Error in deleteing a project : ${error}`);
    }
    res.redirect('back');
  },
};
