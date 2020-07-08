const User = require("../models/users");
require("../config/db");

const charmander = {
  nombre: "Charmander",
  tipo: "Fuego",
  level: 6,
  imgURI: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  email: "prueba@prueba.com",
  password: "A123abcd",
};

const bulbasaur = {
  nombre: "Bulbasaur",
  tipo: "Planta",
  level: 5,
  imgURI:
    "https://vignette.wikia.nocookie.net/es.pokemon/images/4/43/Bulbasaur.png/revision/latest?cb=20170120032346",
  email: "prueba2@prueba.com",
  password: "A123abcd",
};

const squirtle = {
  nombre: "Squirtle",
  tipo: "Agua",
  level: 6,
  imgURI:
    "https://vignette.wikia.nocookie.net/es.pokemon/images/e/e3/Squirtle.png/revision/latest?cb=20160309230820",
  email: "prueba3@prueba.com",
  password: "A123abcd",
};

User.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
