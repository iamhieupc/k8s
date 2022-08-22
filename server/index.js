const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello customer ci cd')
})

app.listen(port, () => {
  console.log(`Up and Running on port`);
})