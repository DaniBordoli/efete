const Account = require("../models/accounts");
require("../config/db");

const charmander = {
    entity: 72,
    nameEntity: 'Santander',
    accountNumber: 6563289820230 ,
    cbu_cvu: 'cbu',
    user: {
        "_id": "5f06118a3988da4a1972ad61",
    }
}

const charmander2 = {
    entity: 143,
    nameEntity: 'Brubank',
    accountNumber: 9786753678,
    cbu_cvu: 'cbu',
    user: {
        "_id": "5f06118a3988da4a1972ad61",
    }
}

const bulbasaur = {
    entity: 17,
    nameEntity: 'BBVA',
    accountNumber: 83783472923,
    cbu_cvu: 'cbu',
    user: {
        "_id": "5f06118a3988da4a1972ad62",
    }
}

const squirtle = {
    entity: 322,
    nameEntity: 'Banco Industrial',
    accountNumber: 1837437239,
    cbu_cvu: 'cbu',
    user: {
        "_id": "5f06118a3988da4a1972ad63",
    }
}

Account.insertMany([charmander,charmander2, bulbasaur, squirtle]).then(() => {
    console.log("Ready to go!");

    process.exit();
});