'use strict';

const fs = require('fs');

let getSuperHeroData = () => {
    let rawdata = fs.readFileSync('./data/superheroes.json');  
    let superheroes = JSON.parse(rawdata);  
    return superheroes;
}

module.exports = {
    getSuperHeroData
}
