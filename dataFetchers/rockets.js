const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

const getAllRockets = async () => {
    let data;
    await fetch(baseApiUrl + 'rockets').then(res => (data = res.json()));
    return data;
};

const getRocket = async rocketId => {
    let data;
    await fetch(baseApiUrl + 'rockets/' + rocketId).then(res => (data = res.json()));
    return data;
};

module.exports = { getAllRockets, getRocket };
