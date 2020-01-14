const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

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
