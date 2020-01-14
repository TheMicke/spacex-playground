const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

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
