const fetch = require('node-fetch');
const baseApiUrl = require('../app');

const getInfo = async () => {
    let data;
    await fetch(baseApiUrl + 'info').then(res => (data = res.json()));
    return data;
};

module.exports = { getInfo };
