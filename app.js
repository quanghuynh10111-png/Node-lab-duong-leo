const express = require('express');
const app = express();
app.use(express.json());

const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Dương Leo!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server chạy tại http://localhost:${process.env.PORT || 3000}`);
});
