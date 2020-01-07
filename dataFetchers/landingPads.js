const fetch = require('node-fetch');
const baseApiUrl = require('../app');

const getAllLandingPads = async () => {
    let data;
    await fetch(baseApiUrl + 'landingpads').then(res => (data = res.json()));
    return data;
};

const getLandingPad = async landingPadId => {
    let data;
    await fetch(baseApiUrl + 'landingpads/' + landingPadId).then(res => (data = res.json()));
    return data;
};

module.exports = { getAllLandingPads, getLandingPad };
