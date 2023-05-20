const Project = require('../models/project');

module.exports = {
  create: async (req, res) => {
    const {
      'project-title': title,
      'project-description': description,
      'project-author': author,
    } = req.body;
    try {
      await Project.create({
        title,
        description,
        author,
      });
    } catch (error) {
      console.log(`Error in creating a project : ${error}`);
    }
    res.redirect('/');
  },
  delete: async (req, res) => {
    try {
      await Project.findByIdAndRemove(req.params.id);
    } catch (error) {
      console.log(`Error in deleting a project : ${error}`);
    }
    res.redirect('/');
  },
  get: async (req, res) => {
    try {
      const project = await Project.findById(req.params.id).populate('issues');
      res.render('projectPage', {
        project,
      });
    } catch (error) {
      console.log(`Error in fetching a project : ${error}`);
      res.redirect('back');
    }
  },
};
