const fetch = require('fetch');
const baseApiUrl = '../app.js';

const getAllShips = async () => {
    let data;
    await fetch(baseApiUrl + 'ships').then(res => (data = res.json()));
    return data;
};

const getShip = async shipId => {
    let data;
    await fetch(baseApiUrl + 'ships/' + shipId).then(res => (data = res.json()));
    return data;
};

module.exports = { getAllShips, getShip };
