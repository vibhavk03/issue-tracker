module.exports = function (req, res) {
  res.render('home', {
    test: 'yay express connected to ejs',
  });
};
