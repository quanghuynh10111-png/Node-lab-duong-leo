const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Danh sách user của Dương Leo đây!' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Tạo user mới', data: req.body });
});

module.exports = router;
