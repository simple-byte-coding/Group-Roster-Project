// require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// require routes
const errorRoute = require('./routes/404');

const app = express();
const router = express.Router();


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// keep new routes above '/' and errorRoute
app.get("/message", (req, res) => {
  res.status(200).json({ message: "Hello from the server"} );
})

router.use(errorRoute);
app.get('/', (req, res) => {
  console.log("Homepage request");
});

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});