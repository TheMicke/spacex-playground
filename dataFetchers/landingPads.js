const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

const getAllLandingPads = async () => {
    let data;
    await fetch(baseApiUrl + 'landpads').then(res => (data = res.json()));
    return data;
};

const getLandingPad = async landingPadId => {
    let data;
    await fetch(baseApiUrl + 'landpads/' + landingPadId).then(res => (data = res.json()));
    return data;
};

module.exports = { getAllLandingPads, getLandingPad };
