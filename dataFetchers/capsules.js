const fetch = require('node-fetch');
const baseApiUrl ='https://api.spacexdata.com/v3/';

const getAllCapsules = async () => {
    let data;
    await fetch(baseApiUrl + 'capsules').then(res => (data = res.json()));
    return data;
};

const getUpcomingCapsules = async () => {
    let data;
    await fetch(baseApiUrl + 'capsules/upcoming').then(res => (data = res.json()));
    return data;
};

const getPastCapsules = async () => {
    let data;
    await fetch(baseApiUrl + 'capsules/past').then(res => (data = res.json()));
    return data;
};

const getCapsule = async capsuleSerial => {
    let data;
    await fetch(baseApiUrl + 'capsules/' + capsuleSerial).then(res => (data = res.json()));
    return data;
};

module.exports = { getAllCapsules, getUpcomingCapsules, getPastCapsules, getCapsule };
