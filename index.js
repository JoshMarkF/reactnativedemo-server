const express = require('express');
const app = express();

let getSuperHeroData = require('./src/superhero_handler').getSuperHeroData;

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/superheroes', (req, res) => {
  let result = getSuperHeroData();
  res.send(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
