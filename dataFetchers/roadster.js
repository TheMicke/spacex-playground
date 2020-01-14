const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

const getRoadster = async () => {
    let data;
    await fetch(baseApiUrl + 'roadster').then(res => (data = res.json()));
    return data;
};

module.exports = { getRoadster };
