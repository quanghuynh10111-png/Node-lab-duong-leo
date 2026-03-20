const users = require('../models/user');

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json({ message: 'Tạo user mới thành công', user: newUser });
};
