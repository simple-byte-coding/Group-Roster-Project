const express = require('express');
const path = require('path');

const router = express.Router();

router.use((res, res, next) => {
  res.statusCode(404).sendFile(path.join(__dirname, "../views", "404.html"));
});

module.exports = router;