const fetch = require('fetch');
const baseApiUrl = '../app.js';

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
