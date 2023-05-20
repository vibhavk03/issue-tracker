const Project = require('../models/project');

module.exports = {
  home: async function (req, res) {
    const projects = await Project.find({}).sort('-createdAt');
    res.render('home', {
      projects,
    });
  },
};
