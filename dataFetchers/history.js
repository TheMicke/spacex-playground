const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

const getAllHistoricalEvents = async () => {
    let data;
    await fetch(baseApiUrl + 'history').then(res => (data = res.json()));
    return data;
};

const getHistory = async historyId => {
    let data;
    await fetch(baseApiUrl + 'history/' + historyId).then(res => (data = res.json()));
    return data;
};

module.exports = { getAllHistoricalEvents, getHistory };
