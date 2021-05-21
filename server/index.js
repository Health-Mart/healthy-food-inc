const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/test', (req, res) => {
  const pathName = path.join(__dirname, '..', 'client', 'dist', 'index.html');
  console.log(pathName);
  res.sendFile(pathName);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
