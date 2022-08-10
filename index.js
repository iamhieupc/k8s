const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

app.listen(port, () => {
  console.log(`Up and Running on port alo alo oke`);
})