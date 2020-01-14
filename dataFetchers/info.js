const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

const getInfo = async () => {
    let data;
    await fetch(baseApiUrl + 'info').then(res => (data = res.json()));
    return data;
};

module.exports = { getInfo };
