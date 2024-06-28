const express = require('express');
const bodyParser = require('body-parser');
const { servicePokemon } = require('./data/services.js');
const managePokemon = servicePokemon();

const port = 5000;
const app = express();

const allowOrigin = [
  'http://localhost:5173',
  'http://localhost:80',
  'http://lvm65066.sit.kmutt.ac.th',
];

app.use(bodyParser.json());
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowOrigin.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  //   res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ pokemonList: managePokemon.getPokemonList() });
});

app.post('/search', (req, res) => {
  const { keyword } = req.body;
  const pokemonList = managePokemon.findPokemonByKeyword(keyword);
  res.send({ pokemonList });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
