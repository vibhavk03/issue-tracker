const express = require('express');
const path = require('path');
const port = 3000;

// const db = require('./config/mongoose.js');

const app = express();

// including static assets
app.use(express.static('./assets'));

// setting app engine as ejs
app.set('view engine', 'ejs');
// refrencing views folder
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

// home page
app.get('/', function (req, res) {
  res.render('home', {
    test: 'yay express connected to ejs',
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in starting server! => error: ${err}`);
    return;
  }
  console.log(`Server listening on port: ${port}`);
});
