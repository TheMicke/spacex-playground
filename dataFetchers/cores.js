const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

const getAllCores = async () => {
    let data;
    await fetch(baseApiUrl + 'cores').then(res => (data = res.json()));
    return data;
};

const getUpcomingCores = async () => {
    let data;
    await fetch(baseApiUrl + 'cores/upcoming').then(res => (data = res.json()));
    return data;
};

const getPastCores = async () => {
    let data;
    await fetch(baseApiUrl + 'cores/past').then(res => (data = res.json()));
    return data;
};

const getCore = async coreSerial => {
    let data;
    await fetch(baseApiUrl + 'cores/' + coreSerial).then(res => (data = res.json()));
    return data;
};

module.exports = { getAllCores, getUpcomingCores, getPastCores, getCore };
