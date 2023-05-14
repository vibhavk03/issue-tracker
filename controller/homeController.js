const Project = require('../models/project');

module.exports = {
  home: async function (req, res) {
    const projects = await Project.find({});
    console.log(projects);
    res.render('home', {
      projects,
      test: 'yay express connected to ejs',
    });
  },
};
