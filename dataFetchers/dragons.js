const fetch = require('node-fetch');
const baseApiUrl = require('../app');

const getAllDragons = async () => {
    let data;
    await fetch(baseApiUrl + 'dragons').then(res => (data = res.json()));
    return data;
};

const getDragon = async dragonId => {
    let data;
    await fetch(baseApiUrl + 'dragons/' + dragonId).then(res => (data = res.json()));
    return data;
};

module.exports = { getAllDragons, getDragon };
