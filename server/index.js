const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello ci cd test 7')
})

app.get('/customer', (req, res) => {
  res.send('Hello customer test 7')
})

app.listen(port, () => {
  console.log(`Up and Running on port`);
})