// Library
const express = require('express');
const app = express();
const port = 3000;

const router = express.Router();

// Modular files
const auth = require('./routes/authRoute');

app.get('/', (req, res) => {
  res.send('oke');
});

app.use('/auth', auth)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});