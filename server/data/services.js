const fs = require('fs');
const filePath = './data/pokemon.json';
const typeFilePath = './data/type.json';

function servicePokemon() {
  const pokemonList = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const typeList = JSON.parse(fs.readFileSync(typeFilePath, 'utf8'));

  function getPokemonList() {
    return pokemonList.map(({ id, name, stats, types }) => {
      return {
        id,
        name,
        stats,
        types: types.map((typeId) => findTypeById(typeId)),
      };
    });
  }

  function getTypeList() {
    return typeList;
  }

  function findPokemonByKeyword(keyword) {
    return pokemonList
      .filter((pokemon) =>
        pokemon.name.toLowerCase().includes(keyword.toLowerCase())
      )
      .map(({ id, name, stats, types }) => {
        return {
          id,
          name,
          stats,
          types: types.map((typeId) => findTypeById(typeId)),
        };
      });
  }

  function findTypeById(id) {
    return typeList.find((type) => type.id === id);
  }

  return {
    getPokemonList,
    getTypeList,
    findPokemonByKeyword,
  };
}

module.exports = { servicePokemon };
