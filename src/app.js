const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Dương Leo!');
});

app.listen(3000, () => {
  console.log('Server chạy tại http://localhost:3000');
});
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);
