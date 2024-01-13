const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorRoute = require('./routes/404');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// keep new routes above '/' and errorRoute


app.use(errorRoute);
app.get('/', (req, res, next) => {
  console.log("Homepage request");
});

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});