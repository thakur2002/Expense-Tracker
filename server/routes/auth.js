
const express = require('express');
const router = express.Router();
const connectDB = require('../db.js');

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  console.log(`${username} and ${password} entered`);
  const result = await connectDB(username, password);

  if (result.success) {
    res.json({ success: true });
  } else {
    res.json({ success: false, error: result.error });
  }
});

module.exports = router;
