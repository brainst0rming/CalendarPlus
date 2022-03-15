const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public_html'));

// Homepage
app.route('/')
  .get((req, res) => {
    res.sendFile(__dirname + '/public_html/index.html');
  });

// Account Registration
app.post('INSERT POST REGISTRATION LINK HERE', (req, res) => {
  let newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  res.json(newUser);
});

// Account Login
app.get('INSERT ACCOUNT LOGIN LINK HERE', (req, res) => {
  let userCredentials = {
    username: req.body.username,
    password: req.body.password
  };
  res.json(userCredentials);
});

// Add/Modify/Delete/View Events
app.route('/month')
  .get((req, res) => {
    res.sendFile(__dirname + '/public_html/month.html');
  })
  .post((req, res) => {
    res.end();
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Node is listening on port ${PORT}...`);
});