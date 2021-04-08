const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("places get request");
  res.json({ place: "p1" });
});

module.exports = router;