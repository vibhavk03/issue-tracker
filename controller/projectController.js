const Project = require('../models/project');

module.exports = {
  create: async (req, res) => {
    const { 'project-title': title, 'project-description': description } =
      req.body;
    try {
      const p = await Project.create({
        title,
        description,
      });
      console.log('Project created!', p);
    } catch (error) {
      console.log(`Error in creating a project : ${error}`);
    }
    res.redirect('back');
  },
};
