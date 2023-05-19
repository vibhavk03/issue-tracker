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
      // console.log('Issue created!', issue);
      const project = await Project.findById(req.params.id);
      project.issues.push(issue);
      await project.save();
      // console.log('Project saved!', project);
    } catch (error) {
      console.log(`Error in creating an issue : ${error}`);
    }
    res.redirect('back');
  },
};
