const Project = require('../models/project');

module.exports = {
  create: async (req, res) => {
    const {
      'project-title': title,
      'project-description': description,
      'project-author': author,
    } = req.body;
    try {
      const p = await Project.create({
        title,
        description,
        author,
      });
      console.log('Project created!', p);
    } catch (error) {
      console.log(`Error in creating a project : ${error}`);
    }
    res.redirect('/');
  },
  deleteFromHome: async (req, res) => {
    try {
      const p = await Project.findByIdAndRemove(req.params.id);
      console.log('Project removed!', p);
    } catch (error) {
      console.log(`Error in deleteing a project : ${error}`);
    }
    res.redirect('/');
  },
  getProject: async (req, res) => {
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
